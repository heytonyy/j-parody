const ExampleController = require("../controllers/example.controllers")

module.exports = app => {
    // read all
    app.get("/api/example/", ExampleController.getAllExample);
}