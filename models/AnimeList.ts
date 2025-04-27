import mongoose, { Document, Schema } from "mongoose";

export interface IAnimeList extends Document {
  userId: mongoose.Types.ObjectId;
  animeId: string;
  title: string;
  image?: string;
  status: 'Watching' | 'Completed' | 'Want to Watch';
  addedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AnimeListSchema = new Schema<IAnimeList>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  animeId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  status: {
    type: String,
    enum: ['Watching', 'Completed', 'Want to Watch'],
    default: 'Watching'
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.models.AnimeList || mongoose.model<IAnimeList>("AnimeList", AnimeListSchema);
