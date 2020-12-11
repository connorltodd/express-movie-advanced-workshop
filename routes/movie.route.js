const express = require("express");
const router = express.Router();
const connection = require("../config");

// http://localhost:5000/movies
router.get("/", (request, response) => {
  connection.query("SELECT * FROM movies", (err, results) => {
    if (err) response.status(500).send(err);
    response.json(results);
  });
});

// http://localhost:5000/movies/1
router.get("/:id", (request, response) => {
  const movieId = request.params.id;
  connection.query(
    `SELECT * FROM movies WHERE id =${movieId}`,
    (err, results) => {
      if (err) response.status(500).send(err);
      response.json(results);
    }
  );
});

// http://localhost:5000/movies
router.post("/", (request, response) => {
  const { title, director, year, color, duration } = request.body;
  connection.query(
    "INSERT INTO movies (title, director, year, color, duration) VALUES (?, ?, ?, ?, ?);",
    [title, director, year, color, duration],
    (err, results) => {
      if (err) response.status(500).send(err);

      connection.query(
        `SELECT * FROM movies WHERE id =${results.insertId}`,
        (err2, movie) => {
          if (err) response.status(500).send(err);
          response.json(movie);
        }
      );
    }
  );
});

module.exports = router;
