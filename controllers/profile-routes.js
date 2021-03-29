// const { restore } = require("../models/Post")

const router = require("express").Router();
router.get("/", function (req, res) {
  res.render("profile");
});
module.exports = router;
