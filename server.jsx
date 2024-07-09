var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const {ObjectId} = require("mongodb").ObjectId; 
const bcrypt = require("bcrypt");

var app = Express();
app.use(cors());
app.use(Express.json());

const regSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    passwrd: {
        type: String,
        required: true
        },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

var MongoString = "mongodb+srv://omondistanley82:JQNOV0bbOJTdJIzW@rebooting.h6elumy.mongodb.net/?retryWrites=true&w=majority&appName=rebooting";

const usr = mongoose.model("usr", regSchema);
var dbname = "ideax";
var dbase;

app.listen(3003, async() => {
    try {
        const client = await MongoClient.connect(MongoString);
        dbase = client.db(dbname);
        console.log("MongoDB connection successful\r\n");

    }catch(error) {
        console.log("MongoDB connection failed\r\n", error);
    }
    console.log("Server started at port 3003\n");
});

