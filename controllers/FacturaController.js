import FacturaModel from "../models/FacturaModel.js";

// METODOS CRUD

export const getAllFacturas = async (req, res) => {
  try {
    const facturas = await FacturaModel.findAll();
    res.json(facturas);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createFactura = async (req, res) => {
  try {
    await FacturaModel.create(req.body);
    res.json({ message: "Registro creado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteFactura = async (req, res) => {
  try {
    await FacturaModel.destroy({ where: { id: req.params.id } });
    res.json({ message: "Registro eliminado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
