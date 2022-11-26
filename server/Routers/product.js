const express = require("express");
const router = express.Router();
const productBL = require("../BL/productBL");

router.get("/", async (req, res) => {
  try {
    const status = await productBL.getDataDB();
    res.json(status);
  } catch (e) {
    res.json(e);
  }
});

router.get("/:id", async (req, res) => {
  try{
    const id  = req.params.id;
    console.log(id);
    const status = await productBL.getById(id);
    res.status(201).json(status);
  }catch(err){
    res.status(500).json({msg:err})
  }
});

router.post("/", async (req, res) => {
  const product = req.body;
  const status = await productBL.createProduct(product);
  res.json(status);
});


router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const status = await productBL.updateProduct(id, obj);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const status = await productBL.deleteProduct(id);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
