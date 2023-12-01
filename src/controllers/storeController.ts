import { Request, Response } from "express";
import StoreService from "../services/storeService";

const getAllStores = async (req: Request, res: Response) => {
  try {
    const stores = await StoreService.getAllStores();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createStore = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const store = await StoreService.createStore(name);
    res.json(store);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {
  getAllStores,
  createStore,
};
