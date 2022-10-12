const mongoose = require("mongoose");

const URL ="mongodb+srv://DJI-STORE:8001819@cluster0.s1raktn.mongodb.net/productsDB?retryWrites=true&w=majority";

mongoose.connect(URL, () => {
  console.log("connect to DB");
});
// mongoose.connect("mongodb://localhost:27017/productsDB",()=>{
//     console.log("connect to DB");
// })
