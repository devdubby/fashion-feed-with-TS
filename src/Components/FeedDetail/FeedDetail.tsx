import React, { useEffect, useState } from 'react';
import { FeedContentType, FeedCommentsType } from '../../modules/types';
import './FeedDetail.css';
import FeedComments from '../FeedComments/FeedComments';
import MediaList from '../MediaList/MediaList';

type FeedDetailProps = FeedContentType & {
  feedComments: FeedCommentsType;
};

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const { y } = state;

  const onScroll = (): void => {
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return y >= 800;
};

function FeedDetail({
  id,
  text,
  tags,
  likedCount,
  replyCount,
  sharedCount,
  mdInfo: {
    id: mdId, mdName, mdThumb, mdDesc,
  },
  mediaList,
  createdAt,
  feedComments,
}: FeedDetailProps) {
  const switchPosition: boolean = useScroll();
  const [isLike, onLike] = useState(false);

  return (
    <div className="detail-container">
      <MediaList mediaList={mediaList} />
      <div
        className="content-container"
        style={{
          position: switchPosition ? 'absolute' : 'fixed',
          marginTop: switchPosition ? '660px' : '',
        }}
      >
        <div className="content">
          <small className="header">
            <span>{`${mdName.toUpperCase()} `}</span>
            <em className="date">
              {createdAt
                .substring(0, 10)
                .split('-')
                .join('.')}
            </em>
          </small>
          <h1 className="title">
            {`${text.split('.')[0]}.`}
            <span className="like-group" onClick={() => onLike(!isLike)}>
              <i className={`${isLike ? "fas fa-heart" : "far fa-heart"}`}>
              <em>{likedCount}</em></i>
            </span>
          </h1>
          <p className="content-text">{text}</p>
          <strong className="hashTag">
            <div className="hashTag-feedTags">
              {tags.map((tag) => (
                <span className="tags" key={tag}>
                  #{`${tag} `}
                </span>
              ))}
            </div>
          </strong>
        </div>
        <div className="reply">
          <h2 className="reply-header">COMMENTS</h2>
          <div className="reply-box">
            <textarea placeholder="내용을 입력하세요." className="reply-input-box"></textarea>
            <button className="reply-btn">댓글 등록</button>
          </div>
          <FeedComments {...feedComments} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(FeedDetail);
