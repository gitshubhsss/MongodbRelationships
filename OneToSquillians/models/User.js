const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("User connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/OneToSqulians");
}
//Create user Schema
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String
    }
});

//Create user collection

const User=mongoose.model("User",UserSchema);

//add data in the usercollection

// const addUserData=async()=>{
//    let user1= new User({
//         username:"shubham ranjane",
//         email:"shubhamranjane16@gmail.com"
//     });
//     let result=await user1.save();
//     console.log(result);
// }

// addUserData().then(()=>{
//     console.log("data saved successfully");
// }).catch((err)=>{
//     console.log("error");
// })

module.exports=User;