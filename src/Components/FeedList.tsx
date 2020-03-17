import React from 'react';
import { FeedListType } from '../modules/types';
import FeedItem from './FeedItem';
import './FeedList.css';

type FeedListProps = {
  feedList: FeedListType;
};

function FeedList({ feedList }: FeedListProps) {
  return (
    <div className="feedList-container">
      {feedList.list.map((feed) => (
        <FeedItem
          key={feed.id}
          id={feed.id}
          text={feed.text}
          tags={feed.tags}
          mdInfo={feed.mdInfo}
          mediaList={feed.mediaList}
          createdAt={feed.createdAt}
        />
      ))}
    </div>
  );
}

export default FeedList;
