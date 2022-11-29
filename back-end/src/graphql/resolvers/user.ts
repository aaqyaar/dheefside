import User from "../../models/user";
import jwt from "jsonwebtoken";

const user = async (args: any, req: any) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (err) {
    throw err;
  }
};

const users = async (args: any, req: any) => {
  try {
    const users = await User.find().exec();
    if (!users) {
      throw new Error("Users not found");
    }
    return users;
  } catch (err) {
    throw err;
  }
};

const createUser = async (args: any) => {
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
};

const login = async (args: any) => {
  try {
    const user = await User.findOne({ email: args.email });
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await user.isMatchPassword(args.password, user.password);
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
};

function generateToken({ _id }: { _id?: string }) {
  return jwt.sign({ id: _id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
}

export const userResolvers = {
  user,
  users,
  createUser,
  login,
};
