import React from 'react';
import { FeedContentType } from '../../modules/types';
import './FeedItem.css';
import { Link } from 'react-router-dom';

type FeedItemProps = FeedContentType;

function FeedItem({
  id,
  text,
  tags,
  likedCount,
  replyCount,
  sharedCount,
  mdInfo,
  mediaList,
  createdAt,
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
        <em className="feedDate">
          {createdAt
            .substring(0, 10)
            .split('-')
            .join('.')}
        </em>
        <ul>
          <li>
            <i className="far fa-heart"><span>{likedCount ? likedCount : 0}</span></i>
          </li>
          <li>
            <i className="far fa-comment"><span>{replyCount ? replyCount : 0}</span></i>
          </li>
          <li>
            <i className="fas fa-share-alt"><span>{sharedCount ? sharedCount : 0}</span></i>
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default FeedItem;
