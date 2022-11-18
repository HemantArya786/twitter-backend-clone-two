const express = require("express");
const userModel = require("../model/userModel");

const router = express.Router();

router.post("/", (req, res) => {
  const newUser = userModel({
    firstname: req.body.firstname,
    phone: req.body.phone,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save();
  res.json(newUser);
});

router.get("/profile/:id", async (req, res) => {
  const userProfile = await userModel.findOne({ _id: req.params.id });
  console.log(userProfile);
  if (userProfile == null) {
    res.json("id not found");
  } else {
    res.json(userProfile);
  }
});

router.post("/login", async (req, res) => {
  const userLogin = await userModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  console.log(userLogin);

  if (userLogin == null) {
    res.json("wrong password");
  } else {
    res.json(userLogin);
  }
});

router.put("/:id", async (req, res) => {
  const updateUser = await userModel.updateOne(
    { _id: req.body.id },
    {
      firstname: req.body.firstname,
      phone: req.body.phone,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    }
  );
  res.json(updateUser);
  if (updateUser.modifiedCount == 1 || updateUser.acknowledged == true) {
    res.json("updated");
  } else {
    res.json("error");
  }
});

module.exports = router;
