import mongoose, { Document, Schema } from "mongoose";

export interface IMangaList extends Document {
  userId: mongoose.Types.ObjectId;
  mangaId: string;
  title: string;
  image?: string;
  status: 'Reading' | 'Completed' | 'Want to Read';
  addedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const MangaListSchema = new Schema<IMangaList>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  mangaId: {
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
    enum: ['Reading', 'Completed', 'Want to Read'],
    default: 'Reading'
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.models.MangaList || mongoose.model<IMangaList>("MangaList", MangaListSchema);
