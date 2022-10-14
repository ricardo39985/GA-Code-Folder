const Movie = require('../models/movie');

module.exports = {
  new: newMovie,
  create,
  index,
};

function index(req, res) {
  Movie.find({}, (err, movies) => {
    res.render('movies/index', { movies });
  });
}
function newMovie(req, res) {
  res.render('movies/new', {});
}
function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove any whitespace at start and end of cast
  req.body.cast = req.body.cast.trim();
  // split cast into an array if it's not an empty string - using a regular expression as a separator
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  const movie = new Movie(req.body);
  movie.save(function (err) {
    // if we don't redirect, the new page will be shown
    // with /movies in the address bar
    if (err) return res.redirect('/movies/new');
    console.log(movie);
    // for now, redirect right back to new.ejs
    res.redirect('/movies');
  });
}
