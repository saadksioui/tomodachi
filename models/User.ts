import mongoose from "mongoose";

interface User {
  email: string,
  password: string,
  username: string
}

const UserSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  username: { type: String, required: true }
}, {
  timestamps: true
})

export default mongoose.model<User>("User", UserSchema)