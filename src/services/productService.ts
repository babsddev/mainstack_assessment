import Product from "../models/productModel";

const getAllProducts = async () => {
  return Product.find();
};

const createProduct = async (name: string, price: number, storeId: string) => {
  const product = new Product({ name, price, storeId });
  return product.save();
};

// updateProduct
const updateProduct = async (
  id: string,
  name: string,
  price: number,
  storeId: string
) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not found");
  }
  product.name = name;
  product.price = price;
  product.storeId = storeId;
  return product.save();
};

// getProductById
const getProductById = async (id: string) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
// deleteProduct
const deleteProduct = async (id: string) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not found");
  }
  return;
};

export default {
  getAllProducts,
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct,
};
