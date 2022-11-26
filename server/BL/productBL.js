const productModel = require("../models/product");

const getDataDB = async () => {
  try {
    const data = await productModel.find({});
    return data;
  } catch (error) {
    return error;
  }
};

const getById = async (id) => {
  try {
    const product = await productModel.findById(id);
    return product;
  } catch (error) {
    return error;
  }
};

const createProduct = async (obj) => {
  try {
    const finalProducts = new productModel(obj);
    await finalProducts.save();
    return "Created";
  } catch (e) {
    throw e;
  }
};

const updateProduct = async (id, obj) => {
  try {
    await productModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw `Error: ${error}`;
  }
};
const deleteProduct = async (id) => {
  try {
    await productModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw `Error: ${error}`;
  }
};

module.exports = {
  getDataDB,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
};
