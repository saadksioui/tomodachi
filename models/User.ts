import { User } from "@/types/type";
import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  username: { type: String, required: true }
}, {
  timestamps: true
})

export default mongoose.model<User>("User", UserSchema)