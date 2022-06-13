import ProductoModel from "../models/ProductoModel.js";

// METODOS CRUD

export const getAllProductos = async (req, res) => {
  try {
    const productos = await ProductoModel.findAll();
    res.json(productos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getProducto = async (req, res) => {
  try {
    const producto = await ProductoModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(producto[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createProducto = async (req, res) => {
  try {
    await ProductoModel.create(req.body);
    res.json({ message: "Registro creado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateProducto = async (req, res) => {
  try {
    await ProductoModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    await ProductoModel.destroy({ where: { id: req.params.id } });
    res.json({ message: "Registro eliminado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
