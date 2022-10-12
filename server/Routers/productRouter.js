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
    const id = req.params.id;
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
module.exports = router;
