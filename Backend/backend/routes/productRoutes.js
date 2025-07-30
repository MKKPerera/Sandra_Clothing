import express from "express";
import { addProduct } from "../controllers/productController.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const router = express.Router();

router.post("/add", verifyAdmin, addProduct); // Admin-only route

export default router;
