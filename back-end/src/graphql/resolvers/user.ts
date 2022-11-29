import User from "../../models/user";
import jwt from "jsonwebtoken";

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
  user: async (args: any, req: any) => {
    try {
      const user = await User.findById(req.userId);
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
  createUser: async (args: any) => {
    try {
      const user = await User.findOne({ email: args.userInput.email });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = new User({
        name: args.userInput.name,
        email: args.userInput.email,
        password: args.userInput.password,
      });
      const result = await newUser.save();
      return { ...result._doc, password: null };
    } catch (err) {
      throw err;
    }
  },
  login: async (
    _: any,
    { loginInput: { email, password: userPassword } }: any
  ) => {
    try {
      const user = await User.findOne({ email: email });
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
