const mongoose = require("mongoose");
const { Schema } = mongoose;

const Project_data = new Schema({
    pname: {
        type: String,
        required: true,
    },
    pcategory: {
        type: String,
        required: true,
    },
    pclient: {
        type: String,
        required: true,
    },  
    pdescription: {
        type: String,
        required: true,
    },
    purl: {
        type: String,
        required: true,
    },
    pimage: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    });

module.exports = mongoose.model("project_data", Project_data);