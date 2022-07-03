import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  link: string;
  category: string;
  image_link: string;
  content: Array<string>;
  date: Date;
}

const ArticleSchema: Schema = new Schema(
  {
    title: { type: String, required: true, unique: true, index: true },
    link: { type: String, required: true, unique: true },
    category: { type: String },
    image_link: { type: String, required: true },
    content: { type: Array<String>, required: true },
    date: { type: Date },
  },
  { collection: "bbc_production" }
);

export default mongoose.models.Article ||
  mongoose.model<IArticle>("Article", ArticleSchema);
