const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/OneTwoMany");
};

main().then(()=>{
    console.log("Order connection successfull"); 
}).catch((err)=>{
    console.log("error");
})

//defining the schema for for the orders
const orderSchema = new mongoose.Schema({
  item: {
    type: String,
  },
  price: {
    type: Number,
  },
});

//order collection
const Order = mongoose.model("Order", orderSchema);
//we are just inserting the sample data
// const addOrders = async () => {
//   let order1=await Order.insertMany([
//     {
//       item: "vadapav",
//       price: 15,
//     },
//     { item: "paneer", price: 210 },
//     {
//       item: "kolhapuri paneer",
//       price: 170,
//     },
//   ]);
//   console.log(order1);
// };

// addOrders()
//   .then(() => {
//     console.log("saved succesfully");
//   })
//   .catch((err) => {
//     console.log("error");
//   });

  module.exports=Order;
