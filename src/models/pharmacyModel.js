const DB = require("../database/db");

const PharmacySchema = new DB.mongoose.Schema({});

const Pharmacy = DB.mongoose.model("Pharmacy", PharmacySchema);

module.exports = Pharmacy;
