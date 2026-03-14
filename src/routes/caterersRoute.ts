import express from "express";
import {
  createCaterers,
  getCatererById,
  getCaterers,
} from "../controllers/caterersController.js";

const router = express.Router();

router.get("/", getCaterers);
router.post("/", createCaterers);
router.get("/:id", getCatererById);

export default router;
