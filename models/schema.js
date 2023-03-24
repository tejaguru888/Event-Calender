const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {type: String , require: true},
    description: {type: String, require:true},
    location: {type: String, require:true},
    startTime: {type: String, require:true},
    endTime: {type: String, require:true},
}, {timestamps: true});

module.exports = mongoose.model("Events" , eventSchema);