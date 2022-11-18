const express = require("express");
const tweetModel = require("../model/tweetModel");
const router = express.Router();

router.post("/", async (req, res) => {
  const newTweet = await tweetModel({
    content: req.body.content,
    date: req.body.date,
  });
  newTweet.save();
  res.json(newTweet);
});

router.get("/", async (req, res) => {
  const getTweet = await tweetModel.find({});
  res.json(getTweet);
});

router.get("/:id", async (req, res) => {
  const getOneTweet = await tweetModel.findOne({ _id: req.params.id });
  res.json(getOneTweet);

  // tweet - user id
  // UserModel.find({_id: tweet.userId})
});

router.put("/:id", async (req, res) => {
  const editTweet = await tweetModel.updateOne(
    { _id: req.params.id },
    { content: req.body.content }
  );
  if (editTweet.modifiedCount == 1) {
    res.json("update successfully");
  } else {
    res.json("error");
  }
});

router.delete("/:id", async (req, res) => {
  const deleteTweet = await tweetModel.deleteOne({ _id: req.params.id });
  if (deleteTweet.deletedCount == 1) {
    res.json("deleted successfully");
  } else {
    res.json("error");
  }
});

module.exports = router;
