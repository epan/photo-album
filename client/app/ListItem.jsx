import React from 'react';

const ListItem = ({image, handleTitleClick}) => {
  return (
    <tr onClick={handleTitleClick}>
      <td>{image.title}</td>
    </tr>
  )
}

export default ListItem;
