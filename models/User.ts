import { User } from "@/types/type";
import mongoose, { Model } from "mongoose";


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profile_picture: {
    type: String,
    default: "userpfp.png"
  },
  cover_photo: {
    type: String,
  },
  bio: {
    type: String,
    default: 'This user has no bio yet.'
  }
}, {
  timestamps: true
})

export default (mongoose.models.User as Model<User & Document>)
  || mongoose.model<User & Document>("User", UserSchema);