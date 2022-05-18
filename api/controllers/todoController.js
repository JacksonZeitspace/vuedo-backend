var mongoose = require("mongoose"),
  todos = require("../models/todoModel");

exports.list_todos = function (req, res) {
  try {
    todos.find({}, function (err, todos) {
      if (err) {
        return res.status(500).json({ error: `Could not fetch todos.` });
      }
      return res.status(200).json([...todos]);
    });
  } catch (err) {
    return res.status(500).json({ error: `Server failure.` });
  }
};

exports.add_todo = function (req, res) {
  try {
    let data = req.body;
    let todo = new todos(data);
    todo.save(function (err, todo) {
      if (err) {
        res.status(500).json({ error: `Insert failure.` });
      } else {
        return res.status(201).json({
          todo,
        });
      }
    });
  } catch (err) {
    return res.status(500).json({ error: `Server failure.` });
  }
};

exports.delete_todo = function (req, res) {
  try {
    const { _id } = req.params;
    todos.deleteOne({ _id }, function (err, result) {
      if (err) {
        res.status(500).json({ error: `Delete failure.` });
      } else {
        return res.status(201).json({ deleted: true });
      }
    });
  } catch (err) {
    return res.status(500).json({ error: `Server failure.` });
  }
};

exports.edit_todo = function (req, res) {
  try {
    const { _id } = req.params;
    let data = req.body;
    todos.findOneAndUpdate(
      { _id },
      { $set: data },
      { new: true },
      function (err, todo) {
        if (err) {
          return res.status(500).json({ error: `Update failure` });
        } else {
          return res.status(201).json({ todo });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ error: `Server failure.` });
  }
};

exports.toggle_done = function (req, res) {
  try {
    const { _id } = req.params;
    let data = req.body;
    todos.findOneAndUpdate(
      { _id },
      { done: data.done },
      { new: true },
      function (err, todo) {
        if (err) {
          return res.status(500).json({ error: `Update failure` });
        } else {
          return res.status(201).json({ todo });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ error: `Server failure.` });
  }
};
