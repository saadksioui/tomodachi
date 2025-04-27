import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profile_picture?: string;
  cover_photo?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
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

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);