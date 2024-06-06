import React, { useState } from 'react';

const SearchBar = ({ breeds, onSearchSelect }) => {
  const [query, setQuery] = useState('');
  const [filteredBreeds, setFilteredBreeds] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const filtered = breeds.filter((breed) =>
        breed.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredBreeds(filtered);
    } else {
      setFilteredBreeds([]);
    }
  };

  const handleSelect = (breed) => {
    setQuery('');
    setFilteredBreeds([]);
    onSearchSelect(breed);
  };

  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search breeds..."
        style={styles.input}
      />
      {filteredBreeds.length > 0 && (
        <ul style={styles.suggestions}>
          {filteredBreeds.map((breed, index) => (
            <li key={index} onClick={() => handleSelect(breed)} style={styles.suggestion}>
              {breed}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

//CSS HERE
//Experienced css bleeding problems in over pages, so css is in-page for now
const styles = {
  searchBar: {
    position: 'relative',
    maxWidth: '60%', // Set maximum width to 60%, as 100% was cutting off
  },
  input: {
    width: '60%',
    padding: '15px',
    fontSize: '16px',
    border: '1px solid #caf377', // Add border for better appearance
    borderRadius: '4px', // Add border radius for rounded corners
  },
  suggestions: {
    position: 'absolute',
    maxWidth: '60%', // Set maximum width to 60%, the dropdown suggestions should be same as search bar
    top: '100%',
    left: '0',
    right: '0',
    backgroundColor: 'white',
    border: '1px solid #caf377',
    borderRadius: '4px',
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    maxHeight: '200px',
    overflowY: 'auto',
    zIndex: 1000,
  },
  suggestion: {
    padding: '15px',
    cursor: 'pointer',
  },
  suggestionHover: {
    backgroundColor: '#caf377',
  },
};

export default SearchBar;
