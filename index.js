const express = require("express");
const app = express();

const connection = require("./config");
const moviesRouter = require("./routes/movie.route");

app.use(express.json());
app.use("/movies", moviesRouter);

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Database Connected`);
  }
});

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`app is running at ${port}`);
  }
});
