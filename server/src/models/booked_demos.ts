import { model, Schema, Document } from "mongoose";

export interface IBookedDemo extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  software: string;
  company: string;
  address: string;
}

const BookedDemoSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  software: { type: String, required: true },
  company: { type: String, required: true },
  address: { type: String, required: true },
});

export default model<IBookedDemo>("BookedDemo", BookedDemoSchema);
