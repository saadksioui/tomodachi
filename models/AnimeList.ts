import { AnimeList } from "@/types/type";
import mongoose from "mongoose";


const AnimeListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  animeId: { type: String, required: true }, // from AnimeDB
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ['WATCHING', 'COMPLETED', 'WANT_TO_WATCH'],
    required: true
  },
}, {
  timestamps: true
})

export default mongoose.model<AnimeList>("AnimeList", AnimeListSchema)