const mongoose = require("mongoose");
const Pharmacy = require("../models/pharmacyModel");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI = process.env.MONGO;

const connectToDB = () => {
  mongoose.connect(MONGO_URI);

  console.log("===================================");
  console.log(`INFO: Connected to MongoDB`);
  console.log("===================================");
};

module.exports = {
  mongoose,
  connectToDB,
  Pharmacy,
};
