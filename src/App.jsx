import SearchMovie from "./Components/searchMovie";
import MovieApi from "./Utility/MovieApi";
import Navbar from "./Components/Navbar";
import MovieList from "./Components/MovieList";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [movie, setMovie] = useState([]);

  const handleSubmit = async (term) => {
    const result = await MovieApi(term);
    setMovie(result);
  };

  useEffect(() => {
    MovieApi();
  }, []);

  return (
    <div>
      <Navbar />
      <SearchMovie search={handleSubmit} />
      <MovieList movies={movie} />
    </div>
  );
}

export default App;
