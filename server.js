require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const employeeRoutes = require("./routes/employeeRoutes")
const app = express()

// set url for mogodb database 
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})

// connection to mongoose driver
const db = mongoose.connection

// handle an error of database connection
db.on('error', (error) => console.error(error))

// display message successfully when database connected   
db.once("open", () => console.log("Database Connection Successfully"))

// manage post request to 
app.use(express.json())

// manage routes of employee
app.use(employeeRoutes)

app.listen(3000, () => console.log("Server started"))