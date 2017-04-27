import React from 'react';

const PhotoFrame = ({url}) => {
  return (
    <div className="photo">
      <img src={url} />
    </div>
  )
}

export default PhotoFrame;
