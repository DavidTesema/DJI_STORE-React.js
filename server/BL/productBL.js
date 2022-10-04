const productModel = require("../models/productModel");

const getDataDB = async () => {
  try {
    const data = await productModel.find({});
    return data
  } catch (error) {
    return error;
  }
};

const getById = async (id) => {
  const product = await productModel.findById(id);
  return product;
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

module.exports = { getDataDB ,getById ,createProduct};
