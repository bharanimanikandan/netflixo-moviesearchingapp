import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="w-8/12 ml-52 border pl-8 p-2 bg-transparent rounded-3xl w-full shadow-[0px_4px_6px_0px_rgba(59,_130,_246,_0.5)]"
      />
      <button
        type="submit"
        className="border-2 ml-4 text-white bg-transparent rounded-lg px-8 py-2.5 opacity-100 shadow-md text-sm capitalize font-medium bg-blue-900 text-white-100 shadow-neutral-200/50"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
