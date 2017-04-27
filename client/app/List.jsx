import React from 'react';

const List = ({images, handleTitleClick}) => {
  return (
    <div>
      <table>
        <tbody>
        {images.map((image) => {
          return (
            <tr
              onClick={handleTitleClick}
              key={image.url}
            >
              <td>
                {image.title}
              </td>
            </tr>
            )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
