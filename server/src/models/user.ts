import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

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

UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await this.encryptPassword(this.password);
});

UserSchema.methods.encryptPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

UserSchema.methods.isMatchPassword = async (
  password: string,
  receivedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, receivedPassword);
};

const User = model<IUser>("User", UserSchema);

export default User;
