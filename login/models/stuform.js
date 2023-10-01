const mongoose = require ('mongoose')
const stuformSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    address: String,
    age: Number,
});
//collection name
const stuformModel = mongoose.model("stuform",stuformSchema)
module.exports = stuformModel;