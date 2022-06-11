import { useEffect, useRef, useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");
  const [enter, setEnter] = useState(false);

  const handleEnter = (e) => {
    if (e.key === "Enter" && search !== "") {
      onSearch(search);
    }
  };

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
        className=" p-3 w-full focus:outline-none"
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
