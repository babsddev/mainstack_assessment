import { Request, Response } from "express";
import ProductService from "../services/productService";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, storeId } = req.body;
    const product = await ProductService.createProduct(name, price, storeId);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// updateProduct
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, storeId } = req.body;
    const product = await ProductService.updateProduct(
      id,
      name,
      price,
      storeId
    );
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// getProductById
const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await ProductService.getProductById(id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// deleteProduct
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ProductService.deleteProduct(id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {
  getAllProducts,
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct,
};
