import mongoose from "mongoose"

export interface User {
  email: string,
  password: string,
  username: string
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