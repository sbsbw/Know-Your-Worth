import "./App.css";
import "./App1.css";

import React, { useState } from 'react';

const SearchResultsPage = () => {
  // State to manage search query and results
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search
  const handleSearch = () => {
    // Here you would implement your search logic, such as fetching data from an API
    // For simplicity, let's just filter a mock dataset
    const mockData = [
      { id: 1, title: 'Result 1', description: 'Description of Result 1' },
      { id: 2, title: 'Result 2', description: 'Description of Result 2' },
      { id: 3, title: 'Result 3', description: 'Description of Result 3' },
    ];
    const filteredResults = mockData.filter(
      item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Search Results</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.map(result => (
          <div key={result.id} className="result-item">
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;