let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let user = new Schema({
    name: String,
    username: {type: String, index: true, unique: true},
    email: {type: String, index: true, unique: true},
    address: {
        city: {type: String},
        state: {type: String},
        country: {type: String},
        pin: {type: Number}
    }
});

user.index({state: 1, country: 1});

module.exports = mongoose.model("User", user);