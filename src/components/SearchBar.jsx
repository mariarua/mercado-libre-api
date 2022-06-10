import { useEffect, useRef, useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");
  const [enter, setEnter] = useState(false);

  const handleEnter = (e) => {
    if (e.key === "Enter" && search !== "") {
      console.log("busca ps", search);
      onSearch(search);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", () => console.log("ola"));
  }, []);

  return (
    <div className="bg-white shadow-mds border-2 rounded-md w-full flex ">
      <label htmlFor="inputsito">
        <span className="material-icons-outlined text-gray-400 border-0 p-3 ">
          search
        </span>
      </label>
      <input
        id="inputsito"
        type="text"
        placeholder="Buscar productos"
        className=" p-3 w-5/6 focus:outline-none"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          handleEnter(e);
        }}
      />
    </div>
  );
}

export default SearchBar;
