const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/OneTwoMany");
}

main().then(()=>{
    console.log("Users connection successfull");  
}).catch(()=>{
    console.log("error");
    
})

//requiring order shcema
const Order=require("./orders");

//user have it username and orders which are placed by the user
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  order: [
    //we have define the schema only for the orders not for the individual documents of the collection
    {
      type: mongoose.Schema.Types.ObjectId,///basically we are storing the id
      ref: Order, //object id kahase aa rahi hai to wo Order collection se aa rahi hai// and heres the refference
    },
  ],
});

const User = mongoose.model("User", UserSchema);

// const addUser = async () => {
//   let user1 = new User({
//     username: "shubham ranjane",
//   });
//   //now we want the data of orders right
//   //for that we need to call to the order database
//   let order1 = await Order.findOne({ item: "paneer" });
//   let order2 = await Order.findOne({ item: "kolhapuri paneer" });
 
//   user1.order.push(order1);
//   user1.order.push(order2);

//   let result = await user1.save();
//   console.log(result);
// };

// addUser()
//   .then(() => {
//     console.log("customer added successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//find user

const findUser = async () => {
  let result = await User.find().populate("order");// this order=order: [ ie nothing but a field name
  //populate is used for instead of storin         g the ids we are going to store the whole oblect
  console.log(result);
};

findUser()
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log("failure");
  });
