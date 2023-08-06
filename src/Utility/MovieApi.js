import axios from "axios";

const MovieApi = async (term) => {
  try {
    const APİ_KEY = "7a4426d01ed10bf8f0001dde4dc793a5";
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${APİ_KEY}&query=${term}`
    );

    const data = response.data;
    console.log(data.results);
    return data.results;
  } catch (err) {
    console.log("Error fetching movies: ", err);
  }
};

export default MovieApi;
