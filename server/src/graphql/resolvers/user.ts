import User from "../../models/user";
import jwt from "jsonwebtoken";
import type {
  AuthData,
  Mutation,
  MutationCreateUserArgs,
  MutationLoginArgs,
  User as UserType,
} from "../../generated/graphql";
import AuthService from "../../services/AuthService";

const Query = {
  users: async () => {
    try {
      const users = await User.find().exec();
      if (!users) {
        throw new Error("Users not found");
      }
      return users;
    } catch (err) {
      throw err;
    }
  },

  user: async (_: any, { userId }: { userId: string }) => {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (err) {
      throw err;
    }
  },
};

const Mutation = {
  createUser: async (
    _: any,
    { userInput }: MutationCreateUserArgs
  ): Promise<UserType> => {
    try {
      const isUserExist = await User.findOne({ email: userInput?.email });
      if (isUserExist) {
        throw new Error("User already exists");
      }

      const userAttr = [
        {
          Name: "name",
          Value: userInput?.name,
        },
        {
          Name: "email",
          Value: userInput?.email,
        },
      ];

      const response = await AuthService.register(
        userInput?.email as string,
        userInput?.password as string,
        userAttr
      );

      if (response instanceof Error) {
        throw new Error(response.message);
      }

      const newUser = new User({
        name: userInput?.name,
        email: userInput?.email,
        password: userInput?.password,
        avatar: userInput?.avatar,
        company: userInput?.company,
        phone: userInput?.phone,
      });

      const result = await newUser.save();

      return {
        ...result._doc,
        password: null,
        awsRes: response.$response.data,
      };
    } catch (err) {
      throw err;
    }
  },
  login: async (
    _: any,
    { email, password }: MutationLoginArgs
  ): Promise<AuthData> => {
    try {
      const user = await User.findOne({ email: email }).exec();
      if (!user) {
        throw new Error("User does not exist");
      }

      const response = await AuthService.login(
        email as string,
        password as string
      );
      if (response instanceof Error) {
        throw new Error(response.message);
      }

      // const isMatch = await user.isMatchPassword(
      //   password as string,
      //   user.password
      // );
      // if (!isMatch) {
      //   throw new Error("Invalid Password credentials");
      // }

      // const token = generateToken({ _id: user._id });
      const authedUser = {
        ...user._doc,
        res: response.$response.data,
      };
      return {
        user: authedUser,
        token: response.AuthenticationResult?.AccessToken,
      };
    } catch (err) {
      throw err;
    }
  },

  verifyCode: async (
    _: any,
    { email, code }: { email: string; code: string }
  ) => {
    try {
      await AuthService.confirm(email, code).then((success: boolean) => {
        if (!success) {
          throw new Error("Code not verified");
        }
        return success;
      });
    } catch (err: any) {
      throw new Error(err);
    }
  },

  resendCode: async (_: any, { email }: { email: string }) => {
    try {
      await AuthService.resendCode(email).then((res: any) => {
        if (res instanceof Error) {
          throw new Error(res.message);
        }
        return res;
      });
    } catch (err) {
      throw err;
    }
  },
};

function generateToken({ _id }: { _id?: string }) {
  return jwt.sign({ id: _id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
}

export const userResolvers = { Mutation, Query };
