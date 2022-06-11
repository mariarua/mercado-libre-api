import SearchBar from "./components/SearchBar";

function App() {
  const handleSearch = (search) => {
    console.log("debo buscar00", search);
    fetch("https://api.mercadolibre.com/sites/MCO/search?q=" + search)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
      });
  };

  return (
    <div className="bg-yellow-50 h-screen">
      <SearchBar onSearch={handleSearch} />
      <div></div>
    </div>
  );
}

export default App;
