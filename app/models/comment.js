var mongoose = require("mongoose");

//This section is the schema or structure for how the articles will be layed out
var Schema =mongoose.Schema;

var commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
},

});
var Article = mongoose.model("comment", commentSchema);
module.exports = comment;