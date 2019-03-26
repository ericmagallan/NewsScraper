var mongoose = require("mongoose");


//This section is the schema or structure for how the articles will be layed out

var Schema =mongoose.Schema;
var articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
},
comment: [
    {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
]
});
var article = mongoose.model("article", articleSchema);
module.exports = article;