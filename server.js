var express = require("express");
const mongoose = require("mongoose");
const employeeRoutes = require("./routes/employeeRoutes");

var cors = require("cors");

var app = express();

app.use(cors());

// set url for mogodb database
mongoose.connect(
  "mongodb+srv://chetan:1tpBT0mbb8oXMnIY@cluster0.lgbkn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

// connection to mongoose driver
const db = mongoose.connection;

// handle an error of database connection
db.on("error", (error) => console.error(error));

// display message successfully when database connected
db.once("open", () => console.log("Database Connection Successfully"));

app.listen(process.env.PORT || 3000, () => console.log("Server started"))

// manage post request to
app.use(express.json());

// manage routes of employee
app.use(employeeRoutes);
