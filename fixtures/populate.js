if (process.argv[2] == "--populatedb") {
  var fixtures = require("node-mongoose-fixtures"),
    fixtureFiles = {
      todos: require("./todoFixtures"),
    };

  Object.keys(fixtureFiles).map(function (key) {
    fixtures(key, function (err, data) {
      if (err) {
        console.log(`Error creating ${key} fixture, error: ${err}`);
      }
    });
  });
}
