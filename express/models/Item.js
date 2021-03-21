const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: String,
  expiryDate: String,
  consumed: { type: boolean },
});

const Item = ("Item", ItemSchema);

module.exports = Item;
