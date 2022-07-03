export const API_URL: string =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const MONGO_URI: any = process.env.MONGO_URI || process.env.MONGODB_URI;
