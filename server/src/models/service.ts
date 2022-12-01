import { Schema, model, Document } from "mongoose";

export interface IService extends Document {
  _id?: string;
  name: string;
  description: string;
  image: string;
  category: string;
  _doc?: any;
}

const schema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

const Service = model<IService>("Service", schema);

export default Service;
