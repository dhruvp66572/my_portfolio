const mongoose = require("mongoose");
const { Schema } = mongoose;

const Images = new Schema({
    id: {
        type: String
    },
    image: {
        type: String
    }
    });

module.exports = mongoose.model("imaged", Images);