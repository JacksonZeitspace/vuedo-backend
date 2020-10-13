var todos = require("../api/models/todoModel");
var fixtures = require("node-mongoose-fixtures");

fixtures.save("todos", {
  todos: [
    {
      title: "Clean Car",
      description: "Car b messy :(",
      done: false,
    },
    {
      title: "Laundry",
      description: "Clothes b dirty :(",
      done: false,
    },
    {
      title: "Groceries",
      description: "Eggs\nMilk\nButter",
      done: false,
    },
    {
      title: "Clean Sink",
      description: "Sink b dirty :(",
      done: false,
    },
  ],
});
