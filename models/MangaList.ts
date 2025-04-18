import mongoose from "mongoose";

interface MangaList {
  userId: mongoose.Schema.Types.ObjectId,
  mangaId: string,
  title: string,
  status: string
}

const MangaListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mangaId: { type: String, required: true },
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ['READING', 'COMPLETED', 'WANT_TO_READ'],
    required: true
  },
}, {
  timestamps: true
})

export default mongoose.model<MangaList>("MangaList", MangaListSchema)