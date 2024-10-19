const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        name:true
    },
    email:{
        type:String,
        default:false
    },
    phone:{
        type:Number,
        default:false
    }
})

module.exports = mongoose.model("Employee",employeeSchema);