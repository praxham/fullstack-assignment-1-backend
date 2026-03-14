import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
let isConnected = false;

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    isConnected = !!db.connections[0].readyState;
    console.log("mongodb connected");
  } catch (error) {
    console.error("error:", error);
  }
};
