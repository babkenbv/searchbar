import "./SearchResultsList.css";
import PropTypes from "prop-types";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  if (!results || (Array.isArray(results) && results.length === 0)) {
    return null;
  }
  return (
    <div className="dropdown">
      <div className="results-list">
        {results.suggestedSearches && (
          <>
            <p className="group-line">Suggested searches</p>
            <ul>
              {results.suggestedSearches.map((result, id) => {
                return <SearchResult result={result} key={id} />;
              })}
            </ul>
          </>
        )}
        {results.categories && (
          <>
            <p className="group-line">Categories</p>
            <ul>
              {results.categories.map((result, id) => {
                return (
                  <SearchResult
                    result={result}
                    icon={result.company.logo}
                    key={id}
                  />
                );
              })}
            </ul>
          </>
        )}
        {results.companies && (
          <>
            <p className="group-line">Companies</p>
            <ul>
              {results.companies.map((result, id) => {
                return (
                  <SearchResult result={result} icon={result.logo} key={id} />
                );
              })}
            </ul>
          </>
        )}
        {results.manufacturers && (
          <>
            <p className="group-line">Manufacturers</p>
            <ul>
              {results.manufacturers.map((result, id) => {
                return (
                  <SearchResult result={result} icon={result.logo} key={id} />
                );
              })}
            </ul>
          </>
        )}
        {results.products && (
          <>
            <p className="group-line">Products</p>
            <ul>
              {results.products.map((result, id) => {
                return (
                  <SearchResult
                    result={result}
                    icon={result.images[0]}
                    price={result.price}
                    key={id}
                  />
                );
              })}
            </ul>
          </>
        )}
        {results.services && (
          <>
            <p className="group-line">Services</p>
            <ul>
              {results.services.map((result, id) => {
                return (
                  <SearchResult
                    result={result}
                    icon={result.images[0]}
                    price={result.price}
                    key={id}
                  />
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
SearchResultsList.propTypes = {
  results: PropTypes.array.isRequired,
};
