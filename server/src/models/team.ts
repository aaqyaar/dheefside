import { Document, model, Schema } from "mongoose";

export interface ITeam extends Document {
  _id?: string;
  name: string;
  position: string;
  avatar: string;
  description: string;
  department: string;
  _doc?: any;
}

const schema: Schema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  avatar: { type: String, required: true },
  description: { type: String, required: true },
  department: { type: String, required: true },
});

const Team = model<ITeam>("Team", schema);
export default Team;
