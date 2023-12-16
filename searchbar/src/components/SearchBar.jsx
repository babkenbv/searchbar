import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import cancelIcon from "../assets/icons/cancel.svg";
import { useState } from "react";
import searchIcon from "../assets/icons/search.svg";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue] = useDebounce(searchValue, 500);

  const fetchData = async (value) => {
    const response = await fetch(`https://webapi.tbuy.am/live/?word=${value}`);
    const data = await response.json();
    setResults(data);
  };

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const cancelSearch = () => {
    setSearchValue("");
  };

  useEffect(() => {
    if (debouncedValue.length >= 3) fetchData(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="input-wrapper">
      <img src={searchIcon} className="icon" alt="React logo" />
      <input
        placeholder="Type to search..."
        value={searchValue}
        onChange={handleChange}
      />
      {searchValue && (
        <button className="clearButton" onClick={cancelSearch}>
          <img src={cancelIcon} className="icon" alt="React logo" />
        </button>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  setResults: PropTypes.func.isRequired,
};
