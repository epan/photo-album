import React from 'react';
import PhotoData from './PhotoData';
import PhotoFrame from './PhotoFrame';

const PhotoViewer = ({image}) => {
  return (
    <div>
      <PhotoFrame url={image.url} />
      <PhotoData title={image.title} rating={image.rating}/>
    </div>
  );
}

export default PhotoViewer;
