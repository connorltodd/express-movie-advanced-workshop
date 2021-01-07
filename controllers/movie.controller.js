const Movie = require("../models/movie.model");

const getAllMovies = (req, res, next) => {
  Movie.getAll((err, results) => {
    if (err) res.status.json(500).send(err);
    req.movies = results;
    next();
  });
};

module.exports = { getAllMovies };
