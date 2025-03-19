const express = require("express");
const DB = require("./database/db");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  DB.connectToDB();
  console.log("===================================");
  console.log(`INFO: App listening on port ${PORT}`);
  console.log("===================================");
});
