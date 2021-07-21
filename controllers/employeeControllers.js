const EmployeeDetail = require("../models/employeeDetail");

module.exports.getEmployeeList = async (req, res) => {
  try {
    const employeeDetail = await EmployeeDetail.find();
    res.status(201).json(employeeDetail);
  } catch (error) {
    res.status(400).json({ name: error.name, message: error.message });
  }
};

module.exports.addEmployee = async (req, res) => {
  try {
    const newEmployee = new EmployeeDetail(req.body);
    const addedEmployee = await newEmployee.save();
    res.status(201).json(addedEmployee);
  } catch (error) {
    res.status(400).json({
      name: error.name,
      message: error.message.split(":")[2].split(",")[0],
    });
  }
};

module.exports.removeEmployee = async (req, res) => {
  try {
    const deletedEmployee = await EmployeeDetail.findOneAndDelete(
      req.params.id
    );

    if (!deletedEmployee)
      throw new Error("No Employee Detail found for this ID");

    res.status(200).json({ message: "employee Detail Deleted successfully" });
  } catch (err) {
    res.status(400).json({
      name: err.name,
      message: err.message,
    });
  }
};
