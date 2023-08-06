import "../Components-Style/MovieItem.css";

function MovieItem({ movies }) {
  const RoundImdb = Math.round(movies.vote_average);

  return (
    <div className="movie-item">
      <h4> {movies.title} </h4>
      <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} />
      <h4> IMDB: {RoundImdb} </h4>
    </div>
  );
}

export default MovieItem;
