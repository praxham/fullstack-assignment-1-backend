import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/configs/db.js";
import { errorHandling } from "./src/middlewear/errorHandling.js";
import catererRoutes from "./src/routes/caterersRoute.js";

dotenv.config();

await connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use(errorHandling);

app.use("/api/caterers", catererRoutes);

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => console.log("listening on port", port));
}

export default app;
