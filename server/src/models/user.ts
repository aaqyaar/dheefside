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

const User = model<IUser>("User", UserSchema);

export default User;
