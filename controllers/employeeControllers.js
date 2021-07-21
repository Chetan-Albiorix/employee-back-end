const express = require("express");
const EmployeeDetail = require("../models/employeeDetail");

module.exports.addEmployee = async (req, res) => {
  try {
    const newEmployee = new EmployeeDetail(req.body);
    console.log("new Employee line 9" + newEmployee);
    const addedEmployee = await newEmployee.save();
    console.log("new Employee line 11" + addedEmployee);
    res.status(201).json(addedEmployee);
  } catch (error) {
    console.log("Error Line 14");
    console.log(error);
    res.status(400).json({ name: error.name, message: error.message });
  }
};
