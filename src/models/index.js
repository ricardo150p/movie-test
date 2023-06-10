const Genre = require("./Genre")
const Movie = require("./Movie")

//! MoviesGenres   // Tabla pivote: "MoviesGenres"
Movie.belongsToMany(Genre, {through: "MoviesGenres"})
Genre.belongsToMany(Movie, {through: "MoviesGenres"})
