const mongoose = require("mongoose");


async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/OneToSqulians");
}


main().catch((err) => console.log(err));

//require the userSchema

const User = require("./User");

//Create post schema

const PostSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  like: {
    type: Number,
  }, //and additionally it will have the userinfo
  //means in the OneToSquillians relationship we dont store the child doments inside the parent
  //we do apposite of that we store the parent document inside the child document
  user: {
    type: mongoose.Schema.ObjectId,
    ref: User,
  },
});

//insert some data into the Post
const Post = mongoose.model("Post", PostSchema);

// const PostData = async () => {
//   let post2 = new Post({
//     content: "khi khi khi khi ",
//     like: 55,
//   });

//   let user1 = await User.findOne({ username: "shubham ranjane" });
//   post2.user = user1;
//   let result = await post2.save();
//   console.log(result);

// };

// PostData();

const getData=async()=>{
   let data= await Post.find({}).populate("user","username");
   console.log(data);
}

getData();