import React from 'react';
import { FeedCommentsType } from '../../modules/types';
import './FeedComments.css';

type FeedCommentsProps = FeedCommentsType;

function FeedComments({
  list, totalListCount, totalPages, isNext,
}: FeedCommentsProps) {
  return (
    <>
      {list.map((reply) => (
        <div key={reply.id} className="reply-list">
          <dl className="reply-list-box">
            <dt>
              <span className="reply-userName">{reply.userName}</span>
              <div className="profile-image-box">
                <img
                  className="profile-image"
                  src={
                    reply.userProfileUrl
                      ? reply.userProfileUrl
                      : require('../../images/defaulImage.png')
                  }
                  alt="profile-image"
                />
              </div>
              <em className="reply-date">{reply.createdAt}</em>
            </dt>
            <dd className="reply-comment">{reply.comment}</dd>
          </dl>
          <button className="reply-comments-btn">답글</button>
        </div>
      ))}
    </>
  );
}

export default React.memo(FeedComments);
