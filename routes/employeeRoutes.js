const express = require("express");
const {
  getEmployeeList,
  addEmployee,
  updateEmployee,
  removeEmployee,
} = require("../controllers/employeeControllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome To Employee Management Back-end");
});

router.get("/employee/list", getEmployeeList);

router.post("/employee/add", addEmployee);

router.patch("/employee/edit/:id", updateEmployee);

router.delete("/employee/delete/:id", removeEmployee);

module.exports = router;
