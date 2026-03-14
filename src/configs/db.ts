import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
let isConnected = false;

export const connectDB = async () => {
  try {
    const connectionString = process.env.MONGO_CONNECTION_STRING;
    if (!connectionString) {
      throw new Error("MONGO_CONNECTION_STRING is not defined");
    }
    const db = await mongoose.connect(connectionString);
    isConnected = !!db.connections[0]?.readyState;
    console.log("mongodb connected");
  } catch (error) {
    console.error("error:", error);
  }
};
