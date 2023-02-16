let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let article = new Schema({
    title: {type: String},
    description: {type: String, index: true},
    tagString: {type: [String]}
})

article.index({tagString: "text"});
article.index({description: "text"});