import mongoose from "mongoose"

export interface User {
  username: string,
  email: string,
  password: string,
  profile_picture: string,
  bio: string
}

export interface MangaList {
  userId: mongoose.Schema.Types.ObjectId,
  mangaId: string,
  title: string,
  status: string
}

export interface AnimeList {
  userId: mongoose.Schema.Types.ObjectId,
  animeId: string,
  title: string,
  status: string
}