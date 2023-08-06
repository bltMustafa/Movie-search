import { useState } from "react";

import "../Components-Style/SearchMovie.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchMovie({ search }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    search(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form onChange={handleFormSubmit}>
        <input
          value={value}
          onChange={handleChange}
          className="search-input"
          placeholder="Search Movies  "
        />
        <SearchIcon className="search-btn" />
      </form>
    </div>
  );
}

export default SearchMovie;
