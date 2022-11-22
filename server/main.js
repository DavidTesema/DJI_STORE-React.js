const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("./config/database");
app.use(express.json())


const productRouter = require("./Routers/productRouter");
app.use("/api/products", productRouter);

const stripe = require("./Routers/stripe")
app.use("/api/stripe", stripe);

const authRouter = require("./Routers/auth")
app.use("/api/auth",authRouter)

app.listen(8000, () => {
  console.log("server is listen to port 8000");
});