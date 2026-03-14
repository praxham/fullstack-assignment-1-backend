import type { Request, Response, NextFunction } from "express";
import { Caterer } from "../models/caterers.models.js";
import { handleResponse } from "../utilities.js";

export const getCaterers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await Caterer.find();
    handleResponse(res, 200, "Caterers Fetched Successfully", result);
  } catch (e) {
    next(e);
  }
};

export const createCaterers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, location, pricePerPlate, cuisines, rating } = req.body;

    const isMissingFields = [name, location, pricePerPlate, cuisines].some(
      (field) => !field,
    );
    if (isMissingFields) {
      return handleResponse(
        res,
        400,
        "Please Provide Required Fields: name, location, pricePerPlate, cuisines",
      );
    }
    const result = await Caterer.create({
      name,
      location,
      pricePerPlate,
      cuisines,
      rating,
    });
    handleResponse(res, 200, "Caterer Created Successfully");
  } catch (e) {
    next(e);
  }
};

export const getCatererById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    if (!id) return handleResponse(res, 400, "Please Provide an Caterer ID");
    const result = await Caterer.findById(req.params.id);
    handleResponse(res, 200, "Caterer Fetched Successfully", result);
  } catch (e) {
    next(e);
  }
};
