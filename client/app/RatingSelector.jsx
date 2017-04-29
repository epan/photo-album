import React from 'react';

const RatingSelector = ({rating}) => {
  const RATINGS = [0, 1, 2, 3, 4, 5];

  return (
    <select name="rating">
      {RATINGS.map((value) => {
        if (value === rating) {
          return <option key={value} value={value} selected>{value}</option>
        } else {
          return <option key={value} value={value}>{value}</option>;
        }
      })}
    </select>
  )
}

export default RatingSelector;
