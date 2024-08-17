//we are going to see one to few relationships

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main()
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//defining the schema for user

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    address:[{
        _id:false,
        location:{
            type:String
        },
        city:{
            type:String,
        }
    }]
})

//now we are going to create the models

const User=mongoose.model("User",UserSchema);

const addUsers=async()=>{
    let user1=new User({
        username:"papya ranjane",
        address:[{
            location:"Taware colany ,SahakarNage ",
            city:"pune"
        },{
            location:"A/P ghavar, tal-velhe,dist-pune",
            city:"velhe"
        }]
    })

   let result= await user1.save();
   console.log(result);
}

addUsers().then(()=>{
    console.log("data saved successfully");
}).catch((err)=>{
    console.log(err); 
})