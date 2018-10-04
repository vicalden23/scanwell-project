const mongoose = require('mongoose');
const config = require('../config');

// connect to db
mongoose.connect(config.db.url, { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log(`Mongo connection open on ${config.db.url}`);
});

// define schema
const movieSchema = new mongoose.Schema({
  title: { type: String },
  movie_id: { type: Number },
  seen: { type: Boolean },
  watchlist: { type: Boolean },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
