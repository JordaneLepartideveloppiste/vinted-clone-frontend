import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("Rechercher des articles");

    const handleChange = (e) => {
      setSearchInput(e.target.value);
    };
    const handleClick = () => {
      setSearchInput("");
    };
  return (
    <div className="search">
      <FontAwesomeIcon icon="search" color="rgba(76, 76, 76, 0.6)" />
      <input
        type="text"
        id="search_input"
        value={searchInput}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
};

export default SearchBar;
