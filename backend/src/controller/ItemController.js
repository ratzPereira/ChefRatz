const Item = require("../model/ItemModel");

const getAllItems = async (req, res) => {
  try {
    const result = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items" });
  }
};

const getSearchedItems = async (req, res) => {
  const { query } = req.query;

  try {
    let items = [];
    if (query) {
      items = await Item.find({ name: { $regex: query, $options: "i" } });
    }
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Error fetching items" });
  }
};

const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: "Error creating item" });
  }
};

module.exports = {
  getAllItems,
  getSearchedItems,
  createItem,
};
