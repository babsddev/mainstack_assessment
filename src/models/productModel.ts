import mongoose, { Schema, Document, Types } from "mongoose";
import ProductInterface from "../interface/product.interface";

export interface ProductDocument extends ProductInterface, Document {}

const productSchema: Schema<ProductDocument> = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  storeId: { type: String, required: true },
  //   storeId: { type: Types.ObjectId, ref: "Store", required: true },
});

export default mongoose.model<ProductDocument>("Product", productSchema);
