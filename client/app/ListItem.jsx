import React from 'react';

const ListItem = ({image, handleTitleClick}) => {
  return (
    <tr onClick={() => {
        handleTitleClick(image.id);
      }}>
      <td>{image.title}</td>
    </tr>
  )
}

export default ListItem;
