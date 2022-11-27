const mongoose = require("mongoose");
require("dotenv").config()

const URL = process.env.MONGODB_ATLAS_KEY

mongoose.connect(URL, () => {
  console.log("connect to DB");
});
