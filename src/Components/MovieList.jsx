import MovieItem from "./MovieItem";

import "../Components-Style/MovieList.css"



function MovieList({ movies }) {
  return (
    <div className="card">
      {movies.map((movie, key) => {
        return <MovieItem movies={movie} key={key} />;
      })}
    </div>
  );
}

export default MovieList;
