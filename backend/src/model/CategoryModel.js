const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  menuId: Number,
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
