import React from 'react';
import { FeedListType } from '../../modules/types';
import FeedItem from '../FeedItem/FeedItem';
import './FeedList.css';

type FeedListProps = {
  feedList: FeedListType;
};

function FeedList({ feedList }: FeedListProps) {
  return (
    <div className="feedList-container">
      {feedList.list.map((feed) => (
        <FeedItem key={feed.id} {...feed} />
      ))}
    </div>
  );
}

export default FeedList;
