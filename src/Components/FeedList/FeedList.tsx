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
        <FeedItem
          key={feed.id}
          id={feed.id}
          text={feed.text}
          tags={feed.tags}
          likedCount={feed.likedCount}
          replyCount={feed.replyCount}
          sharedCount={feed.sharedCount}
          mdInfo={feed.mdInfo}
          mediaList={feed.mediaList}
          createdAt={feed.createdAt}
        />
      ))}
    </div>
  );
}

export default FeedList;
