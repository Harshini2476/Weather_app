import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    const city = input.trim();
    if (city) {
      onSearch(city);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <Search size={18} className="search-icon" />

        <input
          type="text"
          className="search-input"
          placeholder="Search for a city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <button
          className="search-button"
          onClick={handleSearch}
          disabled={loading || !input.trim()}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </div>
  );
}
