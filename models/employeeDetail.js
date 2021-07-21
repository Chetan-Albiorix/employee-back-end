const mongoose = require('mongoose')

const employeeDetailSchema = new mongoose.Schema({
    personalDetail: {
        firstName: {
            type: String,
            required: true
        }, 
        middleName: {
            type: String,
            required: true
        }, 
        lastName: {
            type: String,
            required: true
        }, 
        mobileNumber: {
            type: String,
            required: true
        }, 
        contactNumber: String, 
        email: {
            type: String,
            validate: {
                validator: function(v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "Please enter a valid email"
            },
            required: true
        }, 
        birthday: {
            type: Date,
            required: true
        },
        presentAddress: String,
        permanentAddress: String,
        image: {
            fileName: {
                type: String,
                required: true
            },
            fileSrc: {
                type: String,
                required: true
            }
        }
    },
    bankDetail: {
        bankName: {
            type: String,
            required: true
        }, 
        accountName: {
            type: String,
            required: true
        }, 
        bankAccountNo: {
            type: Number,
            required: true
        }, 
        ifscCode: {
            type: String,
            required: true
        },
        aadhaarCardNumber: {
            type: Number,
            required: true
        },
        panCardNumber: {
            type: String,
            required: true
        },
    },
    professionalDetail: {
        designation: {
            type: String,
            required: true
        }, 
        department: {
            type: String,
            required: true
        }, 
        experience: {
            type: Number,
            required: true
        }, 
        currentLocation: {
            type: String,
            required: true
        }, 
        skills: [{
            type: String,
            required: true
        }],
        resumeFile: {
            fileName: {
                type: String,
                required: true
            },
            fileSrc: {
                type: String,
                required: true
            }
        } 
    },
    educationDetail: [{
        educationName: {
            type: String,
            required: true
        }, 
        universityName: {
            type: String,
            required: true
        }, 
        result: {
            type: String,
            required: true
        }, 
        yearOfPassing: {
            type: Number,
            required: true
        }, 
    }],
    experienceDetail: [{
        companyName: {
            type: String,
            required: true
        }, 
        position: {
            type: String,
            required: true
        }, 
        totalYear: {
            type: Number,
            required: true
        }, 
        lastCtc: {
            type: Number,
            required: true
        },
    }],
    currentOrganizationDetail: {
        joiningDate: {
            type: Date,
            required: true
        }, 
        nextAppraisalDate: {
            type: Date,
            required: true
        }, 
        currentCtc: {
            type: Number,
            required: true
        }, 
    }
});

module.exports = mongoose.model('EmployeeDetail', employeeDetailSchema)