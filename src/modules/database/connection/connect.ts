import mongoose from "mongoose";
import { MONGO_URI } from "./config";

/**
 *
 * @return {Mongoose} Connection Module
 */
async function dbConnect() {
  mongoose
    .connect(MONGO_URI)
    .then((resolve: any) => {
      console.log("Well made connection!");
      return resolve;
    })
    .catch((error: any) => console.log("ERROR CONNECTING TO DB!---> ", error));
}
export default dbConnect;
