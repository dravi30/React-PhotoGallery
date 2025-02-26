import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="row">
      {images.map((image) => (
        <div key={image.id} className="col-md-4 col-sm-6 mb-4">
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className="img-fluid rounded"
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
};
export default ImageGrid;
