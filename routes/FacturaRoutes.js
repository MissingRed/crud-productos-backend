import express from "express";
import {
  getAllFacturas,
  createFactura,
  deleteFactura,
} from "../controllers/FacturaController.js";

const router = express.Router();

router.get("/", getAllFacturas);
router.post("/", createFactura);
router.delete("/:id", deleteFactura);

export default router;
