import mongoose, { Schema, Document } from "mongoose";
import StoreInterface from "../interface/store.interface";

export interface StoreDocument extends StoreInterface, Document {}

const storeSchema: Schema<StoreDocument> = new Schema({
  name: { type: String, required: true },
});

export default mongoose.model<StoreDocument>("Store", storeSchema);
