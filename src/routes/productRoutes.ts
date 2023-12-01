import express from "express";
import ProductController from "../controllers/productController";

const router = express.Router();

router.get("/", ProductController.getAllProducts);
router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.updateProduct);
router.get("/:id", ProductController.getProductById);
router.delete("/:id", ProductController.deleteProduct);

export default router;
