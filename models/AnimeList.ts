import mongoose from "mongoose";

interface AnimeList {
  userId: mongoose.Schema.Types.ObjectId,
  animeId: string,
  title: string,
  status: string
}

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