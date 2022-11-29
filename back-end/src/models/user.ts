import bcrypt from "bcryptjs";
import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  _id?: string;
  name: string;
  email: string;
  password: string;
  _doc?: any;
  avatar: string;
  encryptPassword(password: string): Promise<string>;
  isMatchPassword(password: string, receivedPassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

// Encrypt password using bcrypt
UserSchema.methods.encryptPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Encrypt password before saving
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await UserSchema.methods.encryptPassword(this.password);
  next();
});

// compare password
UserSchema.methods.isMatchPassword = async function (
  password: string,
  receivedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, receivedPassword);
};

const User = model<IUser>("User", UserSchema);

export default User;
