const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const router = require("./routes/auth.js");


// Create the app
const app = express();

//Login to MonogoDB
dotenv.config();
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true},
  () => {
    console.log("MongoDB is connected");
  }
);

//Middelwars
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", router);

//Listen to the port 8800
const port = 8800;
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}!`);
});
