const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const cors = require('cors');
const config = require('./config');
const Movie = require('./db/Movie');

const router = express();

// enable CORS
router.use(cors());

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.listen(2023, () => {
  console.log('LISTENING PORT NUMBER 2023');
});

// GET: /api/movies/seen
// fetches all seen movies
router.get('/api/movies/seen', (req, res, next) => {
	Movie.find({ seen: true }, (err, movies) => {
		if (err) {
			res.send('could not fetch movies');
		}
		res.status(200).json(movies);
	})
})

// GET: /api/movies/watchlist
// fetches all watchlisted movies
router.get('/api/movies/watchlist', (req, res, next) => {
	Movie.find({ watchlist: true }, (err, movies) => {
		if (err) {
			res.send('could not fetch movies');
		}
		res.status(200).json(movies);
	})
})

// GET: /api/movies/search/:title
// query themoviedb API to search for movies by title
router.get('/api/movies/search/:title', (req, res, next) => {
	axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${config.movies.api_key}&query=${req.params.title}`)
		.then((response) => {
			res.status(200).json(response.data.results)
		})
		.catch((err) => res.send(err))
})

//GET: /api/movies/:id
// query the moviedb API for movie details
router.get('/api/movies/:id', (req, res, next) => {
	axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${config.movies.api_key}`)
		.then((response) => {
			res.status(200).send(response.data)
		})
		.catch((err) => res.send(err))
})

// POST: /api/movies/seen
router.post('/api/movies/seen', (req, res, next) => {
	Movie.create({
		title: req.body.title,
		movie_id: req.body.movie_id,
		seen: true,
		watchlist: false
	}, (err, movie) => {
		if (err) res.status(400).send(err)
		Movie.find({ seen: true}, (err, movies) => {
			if (err) res.status(400).send(err)
			res.status(201).json(movies)
		})
	})
})

// POST: /api/movies/watchlist
router.post('/api/movies/watchlist', (req, res, next) => {
	Movie.create({
		title: req.body.title,
		movie_id: req.body.movie_id,
		seen: false,
		watchlist: true
	}, (err, movie) => {
		if (err) res.status(400).send(err)
		Movie.find({ watchlist: true }, (err, movies) => {
			if (err) res.send('')
			res.status(201).json(movies)
		})
	})
})

// PUT: /api/movies/seen/:id
// updates movies from watchlist to seen list
router.put('/api/movies/seen/:id', (req, res, next) => {
	Movie.findById(req.params.id, (err, movie) => {
		if (err) {
			res.status(404).send('Could not find movie')
		}
		movie.seen = true
		movie.watchlist = false

		movie.save((err, updatedMovie) => {
			if (err) {
				res.send('Could not update movie')
			}
			res.status(201).send(updatedMovie)
		})
	})
})




