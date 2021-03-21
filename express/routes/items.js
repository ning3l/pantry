const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// GET ALL ITEMS
router.get("/", (req, res) => {
  Item.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
