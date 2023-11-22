const express = require("express");
const path = require("path");
// const dotenv = require("dotenv").config();
// const errorHandler = require("./middleware/errorHandler");
// const connectDb = require("./config/dbConnection");


// connectDb();
const app = express();
const port = 3000;
// const port = process.env.PORT || 5000;

app.use(express.json()); //body-parser(inbuilt-middleware)
app.use(express.static(path.join(__dirname, '..','build')));
app.use("/", require("./routes/cryptoroutes")); //Express middleware

app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});