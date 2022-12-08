import { model, Schema, Document } from "mongoose";

export interface IBookings extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  software: string;
  company: string;
  address: string;
}

const BookingsSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    software: { type: String, required: true },
    company: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model<IBookings>("Booking", BookingsSchema);
