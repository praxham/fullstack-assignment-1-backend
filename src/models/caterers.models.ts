import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICaterer extends Document {
  name: string;
  location: string;
  pricePerPlate: number;
  cuisines: string[];
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

const catererSchema = new Schema<ICaterer>(
  {
    name: {
      type: String,
      required: [true, "Caterer name is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    pricePerPlate: {
      type: Number,
      required: [true, "Price per plate is required"],
      min: [0, "Price cannot be negative"],
    },
    cuisines: {
      type: [String],
      validate: {
        validator: function (v: string[]) {
          return v && v.length > 0;
        },
        message: "A caterer must have at least one cuisine.",
      },
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export const Caterer: Model<ICaterer> =
  mongoose.models.Caterer || mongoose.model<ICaterer>("Caterer", catererSchema);
