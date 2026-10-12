// models/User.ts
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: false },
    field: { type: String, required: false },
    phone: { type: String, default: "" },
    location: { type: String, default: "" },
    experience: { type: String, default: "" },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true },
);

// Avoid overwriting the model if it already exists during development reloads
const User = models.User || model("User", UserSchema);

export default User;

export type UserType = {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  age: number;
  location: string;
  experience?: string;
  field?: string;
  timestamps?: {
    createdAt: Date;
    updatedAt: Date;
  };
};
