import React from 'react';
import './MediaList.css';
import { MediaListType } from '../../modules/types';

type MediaListProps = MediaListType;

function MediaList({ mediaList }: MediaListProps) {
  return (
    <div className="images-container">
      {mediaList.map((media) => (
        <figure className="figure-image" key={media.id}>
          <img className="media-image" src={media.url} alt={media.type} />
        </figure>
      ))}
    </div>
  );
}

export default React.memo(MediaList);
