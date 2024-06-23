const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/?retryWrites=true&w=majority&appName=${process.env.MONGO_DB_NAME}`,
  );

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}

main().catch((err) => console.log(err));

//routes
const itemRoute = require("./src/routes/ItemRoute");

app.use("/api", itemRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
