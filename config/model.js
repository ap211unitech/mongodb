const mongoose = require("mongoose");
const assert = require("assert");
const db_url = process.env.DB_URL;

//Connection code 
mongoose.connect(db_url,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    (error, link) => {
        //Check error
        assert.equal(error, null, "Db connect fails...");

        //If all good
        console.log("Db connect success");
        // console.log(link);
    }
)

//Schema
const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
    // isActive: {
    //     type: Boolean,
    //     default: true
    // },
    // createdOn: {
    //     type: Date,
    //     default: Date.now()
    // }
})
//User Model
const model = mongoose.model("user", schema);

module.exports = model;