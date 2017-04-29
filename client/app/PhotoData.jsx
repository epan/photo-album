import React from 'react';

const PhotoData = ({title, rating}) => {
  const ratings = [0, 1, 2, 3, 4, 5];
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{rating}</li>
      </ul>
      <select name="rating">
        {ratings.map((value) => {
          if (value === rating) {
            return <option key={value} value={value} selected>{value}</option>
          } else {
            return <option key={value} value={value}>{value}</option>;
          }
        })}
      </select>
    </div>
  );
}

export default PhotoData;
