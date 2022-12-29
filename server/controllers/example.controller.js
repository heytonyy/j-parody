const { Example } = require("../models/example.model")

// read all
module.exports.getAllExample = (req, res) => {
    Example.find()
        .then(results => res.json(results))
        .catch(err => res.json(err))
}