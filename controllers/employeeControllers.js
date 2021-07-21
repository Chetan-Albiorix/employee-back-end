const express = require("express");
const EmployeeDetail = require("../models/employeeDetail");

module.exports.addEmployee = async (req, res) => {
  try {
    const newEmployee = new EmployeeDetail(req.body);
    const addedEmployee = await newEmployee.save();
    res.status(201).json(addedEmployee);
  } catch (error) {
    res.status(400).json({ name: error.name, message: error.message });
  }
};
