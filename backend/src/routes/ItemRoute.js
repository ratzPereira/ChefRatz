const express = require("express");
const { getAllItems, createItem } = require("../controller/ItemController");
const router = express.Router();

router.get("/all-items", getAllItems);
router.post("/create-item", createItem);

module.exports = router;
