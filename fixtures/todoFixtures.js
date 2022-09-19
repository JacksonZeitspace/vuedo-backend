var todos = require("../api/models/todoModel");
var fixtures = require("node-mongoose-fixtures");

fixtures.save("todos", {
  todos: [
    {
      title: "Clean Car",
      description: "Vacuum seats",
      done: false,
    },
    {
      title: "Laundry",
      description: "Clean Clothes",
      done: false,
    },
    {
      title: "Groceries",
      description: "Eggs\nMilk\nButter",
      done: false,
    },
    {
      title: "Clean Sink",
      description: "Scrub and do dishes",
      done: false,
    },
  ],
});
