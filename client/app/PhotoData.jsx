import React from 'react';

const PhotoData = ({title, rating}) => {
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{rating}</li>
      </ul>
    </div>
  );
}

export default PhotoData;
