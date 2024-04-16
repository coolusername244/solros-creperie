'use client';
import React, { FC } from 'react';
import PhotoAlbum, { Photo } from 'react-photo-album';
import { useWindowWidth } from '../../helpers';

type PhotoCollageProps = {
  collageImages: Photo[];
};

const PhotoCollage: FC<PhotoCollageProps> = ({ collageImages }) => {
  const windowSize = useWindowWidth();
  let cols = 3;
  if (windowSize < 1200) cols = 2;
  if (windowSize < 768) cols = 1;

  return (
    <PhotoAlbum
      layout="columns"
      columns={cols}
      photos={collageImages}
      spacing={2}
      padding={5}
    />
  );
};

export default PhotoCollage;
