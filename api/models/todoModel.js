var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  done: { type: Boolean },
});

var todos = mongoose.model("todos", todoSchema);

module.exports = todos;
