import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ setImages }) => {
  const [query, setQuery] = useState('');

  const fetchImages = async () => {
    const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&per_page=20`
      );
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchImages();
  };

  return (
    <form className="d-flex mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search for images..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};
export default SearchBar;
