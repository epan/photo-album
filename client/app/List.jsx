import React from 'react';
import ListItem from './ListItem';

const List = ({images, handleTitleClick}) => {
  return (
    <div>
      <table>
        <tbody>
        {images.map((image) => {
          return (
            <ListItem
              key={image.url}
              image={image}
              handleTitleClick={handleTitleClick}
            />
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
