const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
    trainname: {
        type: String,
        requird: true
    },
    trainno: {
        type: Number,
        required: true,
    },
    timing: {
        start: {
            type: String
        },
        end: {
            type: String
        }
    },
    info: {
        starting:{
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        },
        via: {
            type: String
        }
    },
    availability: {
        A1: {
            type: Number
        },
        A2: {
            type: Number
        },
        A3: {
            type: Number
        },
        SL: {
            type: Number
        },
        CC: {
            type: Number
        },
        S2: {
            type: Number
        }
    }
})

// creating a new collection using model
const Train = new mongoose.model('Train', trainSchema); //here you should write capital S and in singular form it will take students automatically ,, pehle student then you should write which schema should this follow in this case it will follow studentSchema

module.exports = Train;