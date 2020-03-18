import React, { useEffect, useState } from 'react';
import { FeedContentType, FeedCommentsType } from '../../modules/types';
import './FeedDetail.css';

type FeedDetailProps = FeedContentType;

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
}: FeedDetailProps) {
  const switchPosition: boolean = useScroll();
  const [isLike, onLike] = useState(false);

  return (
    <div className="detail-container">
      <div className="images-container">
        {mediaList.map((media) => (
          <figure className="figure-image" key={media.id}>
            <img className="media-image" src={media.url} alt={media.type} />
          </figure>
        ))}
      </div>
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
          <div className="reply-list">
            <dl>
              <dt>
                <span></span>
                <em></em>
              </dt>
              <dd></dd>
            </dl>
            <button className="reply-comments-btn">답글</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedDetail;
