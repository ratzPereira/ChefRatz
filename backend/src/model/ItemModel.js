const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
});

const commentsSchema = new Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number },
});

const moreSchema = new Schema({
  prep_time: { type: String, required: true },
  cook_time: { type: String, required: true },
  servings: { type: String, required: true },
  difficulty: { type: String, required: true },
  source: { type: String, required: true },
});

const ItemSchema = new Schema(
  {
    menuId: { type: Number, required: true },
    name: { type: String, required: true },
    thumbnail_image: { type: String, required: true },
    category: { type: String, required: true },
    instructions: { type: String, required: true },
    tags: [String],
    ingredients: { type: [ingredientSchema], required: true },
    comments: { type: [commentsSchema], required: true },
    more: { type: moreSchema },
  },
  { timestamps: true },
);

const ItemModel = mongoose.model("Item", ItemSchema);
module.exports = ItemModel;
