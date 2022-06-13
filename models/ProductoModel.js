import db from "../database/db.js";

import { DataTypes } from "sequelize";

const ProductoModel = db.define("productos", {
  nombre_producto: { type: DataTypes.STRING },
  valor: { type: DataTypes.FLOAT },
});

export default ProductoModel;
