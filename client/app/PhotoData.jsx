import React from 'react';
import RatingSelector from './RatingSelector';

const PhotoData = ({title, rating}) => {
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{rating}</li>
      </ul>
      <RatingSelector rating={rating}/>
    </div>
  );
}

export default PhotoData;
