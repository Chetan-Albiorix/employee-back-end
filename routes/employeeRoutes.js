const express = require("express")
const { 
    getEmployeeList,
    addEmployee,
    updateEmployee,
    deleteEmployee,
} = require("../controllers/employeeControllers")

const router = express.Router()

// router.get("/employee/list", getEmployeeList)

router.post("/employee/add", addEmployee)

// router.patch("/employee/edit/:id", updateEmployee)

// router.delete("/employee/delete/:id", deleteEmployee)

module.exports = router