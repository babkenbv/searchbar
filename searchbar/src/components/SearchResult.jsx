import "./SearchResult.css";
import searchIcon from "../assets/icons/search.svg";
import PropTypes from "prop-types";

export const SearchResult = ({ result, icon, price }) => {
  if (typeof result === "string") {
    return (
      <div
        className="search-result search-result-suggested"
        onClick={(e) => alert(`You selected ${result}!`)}
      >
        <img src={searchIcon} className="icon" alt="React logo" />
        {result}
      </div>
    );
  } else {
    return (
      <div
        className="search-result"
        onClick={(e) => alert(`You selected ${result.name}!`)}
      >
        <img className="product-picture" src={icon} />
        <div>
          <p>{result.name}</p>
          {price && <p>{price} AMD</p>}
        </div>
      </div>
    );
  }
};

SearchResult.propTypes = {
  result: PropTypes.string.isRequired,
  icon: PropTypes.string,
  price: PropTypes.string,
};
