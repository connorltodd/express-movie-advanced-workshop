// in /models/movie-model.js
const connection = require("../config");

const Movie = {};

Movie.getAll = (callback) => {
  connection.query("SELECT * FROM movies", (err, results, fields) => {
    callback(err, results, fields);
  });
};

module.exports = Movie;
