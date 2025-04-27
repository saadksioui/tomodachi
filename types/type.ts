import mongoose from "mongoose"

export interface User {
  username: string,
  email: string,
  password: string,
  profile_picture: string,
  cover_photo: string,
  bio: string
}