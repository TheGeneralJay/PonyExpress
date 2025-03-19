const mongoose = require("mongoose");

const PharmacySchema = new mongoose.Schema({});

const Pharmacy = mongoose.model("Pharmacy", PharmacySchema);

module.exports = Pharmacy;
