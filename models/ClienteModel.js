import db from "../database/db.js";

import { DataTypes } from "sequelize";

const ClienteModel = db.define("clientes", {
  nombre: { type: DataTypes.STRING },
  direccion: { type: DataTypes.STRING },
});

export default ClienteModel;
