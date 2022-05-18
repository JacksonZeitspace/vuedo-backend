const mongoose = require("mongoose"),
  config = require("./config/dev.json");

mongoose.set("useFindAndModify", false);
mongoose.connect(config.dbConfig.host, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const express = require("express"),
  app = express(),
  port = 8080,
  bodyParser = require("body-parser"),
  cors = require("cors"),
  corsOptions = {
    origin: "http://localhost:8081",
  };

const fixtureFiles = {
    populateFixtures: require("../fixtures/populate"),
  },
  routes = {
    todos: require("../api/routes/todoRoutes"),
  };

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ limit: "50MB", extended: true }));
app.use(bodyParser.json({ limit: "50MB" }));

Object.keys(routes).map(function (key) {
  routes[key](app);
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
