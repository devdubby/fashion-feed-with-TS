import React from 'react';
import { ListType } from '../modules/types';
import './FeedItem.css';
import { Link } from 'react-router-dom';

type FeedItemProps = ListType;

function FeedItem({
  id, text, tags, mdInfo, mediaList, createdAt,
}: FeedItemProps) {
  return (
    <Link className="feed-item" to={`/${id}`}>
      <figure className="figure">
        <img className="figure-img" src={mediaList[0].url} />
      </figure>
      <article className="article">
        <div className="feedTags">
          {tags.map((tag) => (
            <h1 key={tag}>#{tag}</h1>
          ))}
        </div>
        <p className="feedText">{text}</p>
      </article>
      <div className="item-footer">
        <em className="feedDate">{createdAt.substring(0, 10).split("-").join(".")}</em>
        <ul>
          <li>0</li>
          <li>10</li>
          <li>100</li>
        </ul>
      </div>
    </Link>
  );
}

export default FeedItem;
