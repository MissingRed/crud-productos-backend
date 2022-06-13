import express from "express";
import cors from "cors";
import db from "./database/db.js";
import ClienteRoutes from "./routes/ClienteRoutes.js";
import ProductoRoutes from "./routes/ProductoRoutes.js";
import FacturaRoutes from "./routes/FacturaRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/clientes", ClienteRoutes);
app.use("/productos", ProductoRoutes);
app.use("/facturas", FacturaRoutes);

try {
  await db.authenticate();
  console.log("CONEXION EXITOSA A LA DB");
} catch (error) {
  console.log(`ERROR EN LA CONEXION ES: ${error}`);
}

app.listen(8000, () => {
  console.log("SERVIDOR CORRIENDO");
});
