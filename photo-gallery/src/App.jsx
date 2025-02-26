import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';

function App() {
  const [images, setImages] = useState([]);
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Photo Gallery</h1>
      <SearchBar setImages={setImages} />
      <ImageGrid images={images} />
    </div>
  );
}
export default App;
