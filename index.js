const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const tweetRouter = require("./routes/tweet.routes");
const userRouter = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/tweet", tweetRouter);

app.use("/user", userRouter);

mongoose.connect(
  "mongodb+srv://hemant:hemant@cluster0.zm42fgw.mongodb.net/new-tweetDB?retryWrites=true&w=majority"
);

app.listen(4500, () => {
  console.log("service is on 4500");
});
