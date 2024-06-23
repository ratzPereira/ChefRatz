const express = require("express");
const {
  getAllItems,
  createItem,
  getSearchedItems,
} = require("../controller/ItemController");
const router = express.Router();

router.get("/all-items", getAllItems);
router.get("/items", getSearchedItems);
router.post("/create-item", createItem);

module.exports = router;
