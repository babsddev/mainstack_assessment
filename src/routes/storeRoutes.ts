import express from "express";
import StoreController from "../controllers/storeController";

const router = express.Router();

router.get("/", StoreController.getAllStores);
router.post("/", StoreController.createStore);

export default router;
