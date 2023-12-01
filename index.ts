import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import productRoutes from "./src/routes/productRoutes";
import storeRoutes from "./src/routes/storeRoutes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

mongoose.connect(process.env.DB_URL as string, {});

app.use("/api/v1/product", productRoutes);
app.use("/api/v1/store", storeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
