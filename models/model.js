const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const { Schema } = mongoose

const workSchema = new mongoose.Schema({
    typwork: {
        type: String
    },
    duration: {
        type: String
    },
    price: {
        type: String
    },
    userId: {
         type: ObjectId
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    works: [workSchema]
});

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    }
});


module.exports.work = mongoose.model('Work', workSchema);
module.exports.user = mongoose.model('User', userSchema);
module.exports.customer = mongoose.model('Customer', customerSchema);

// console.log('a');