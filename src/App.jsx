import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";

const ITEMS_PER_PAGE = 50;

function App() {
  const [results, setResults] = useState([]);
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = (query) => {
    setSearch(query);
  };

  useEffect(() => {
    fetch(
      "https://api.mercadolibre.com/sites/MCO/search?q=" +
        search +
        "&offset=" +
        ITEMS_PER_PAGE * (page - 1)
    )
      .then((res) => res.json())
      .then((data) => {
        if (!!data?.results) {
          setResults(data.results);
          setSize(data.paging.total);
        } else {
          setError(data.message);
          console.log(data.message);
        }
      });
    console.log(ITEMS_PER_PAGE * (page - 1), "offset", "page", page);
  }, [page, search]);

  return (
    <div className="bg-yellow-50 h-full">
      <SearchBar onSearch={handleSearch} />
      {error !== null ? (
        <p className="text-center font-bold text-red-500 m-auto p-3">{error}</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 ">
          {results &&
            results.map((result) => {
              return (
                <Card
                  key={result.id}
                  name={result.title}
                  price={result.price}
                  urlApi={result.permalink}
                  urlImg={result.thumbnail}
                />
              );
            })}
        </div>
      )}

      <Pagination
        size={size}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChanged={(currentPage) => setPage(currentPage)}
      />
    </div>
  );
}

export default App;
