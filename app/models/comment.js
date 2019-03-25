var mongoose = require("mongoose");

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