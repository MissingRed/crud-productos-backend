import db from "../database/db.js";

import { DataTypes } from "sequelize";

const DetalleModel = db.define("facturas", {
  cantidad: { type: DataTypes.INTEGER },
  id_producto: { type: DataTypes.INTEGER },
  id_cliente: { type: DataTypes.INTEGER },
  total: { type: DataTypes.FLOAT },
});

export default DetalleModel;
