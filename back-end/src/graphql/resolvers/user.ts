import User from "../../models/user";
import jwt from "jsonwebtoken";
import type {
  AuthData,
  Mutation,
  MutationCreateUserArgs,
  MutationLoginArgs,
  Query as QueryType,
  User as UserType,
} from "../../generated/graphql";

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
      const user = await User.findOne({ email: userInput?.email });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = new User({
        name: userInput?.name,
        email: userInput?.email,
        password: userInput?.password,
      });
      const result = await newUser.save();
      return { ...result._doc, password: null };
    } catch (err) {
      throw err;
    }
  },
  login: async (
    _: any,
    { email, password: userPassword }: MutationLoginArgs
  ): Promise<AuthData> => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }
      const isMatch = await user.isMatchPassword(userPassword, user.password);
      if (!isMatch) {
        throw new Error("Invalid password");
      }
      const token = await generateToken({
        _id: user._id,
      });
      const { password, ...rest } = user._doc;
      return { token, user: rest };
    } catch (err) {
      throw err;
    }
  },
};

function generateToken({ _id }: { _id?: string }) {
  return jwt.sign({ id: _id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
}

export const userResolvers = { Mutation, Query };
