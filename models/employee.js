const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {

        "empid":String,
        "empname":String,
        "empid":String,
        "mobno":String,
        "email":String,

    }
)

let employeemodel = mongoose.model("employees",schema);
module.exports = {employeemodel}