import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
}

const ArticleSchema: Schema = new Schema(
  {
    title: { type: String, required: true, unique: true },
  },
  { collection: "bbc_production" }
);

export default mongoose.models.Article ||
  mongoose.model<IArticle>("Article", ArticleSchema);
