import type { Request, Response, NextFunction } from "express";

export const errorHandling = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);
  res.status(500).json({
    status: 500,
    message: "Something went wrong!",
    error: err.message,
  });
};
