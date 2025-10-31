import { useState } from "react";
import "../../../styles/styleSearchBar.css";

const SearchBar = ({
  placeholder = "Buscar...",
  onSearch,
  initialValue = "",
}) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch?.(searchTerm.trim());
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch?.(""); // dispara busca com valor limpo
  };

  return (
    <form onSubmit={handleSearch} className="searchbar-container">
      <input
        type="text"
        value={searchTerm}
        placeholder={placeholder}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Campo de busca"
        className="searchbar-input"
      />

      <button className="searchbar-button" aria-label="Buscar" type="submit">
        Buscar
      </button>

      {searchTerm && (
        <button
          onClick={handleClear}
          className="searchbar-clear"
          aria-label="Limpar busca"
          type="button"
        >
          ✕
        </button>
      )}
    </form>
  );
};

export default SearchBar;
