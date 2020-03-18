import React, { useCallback, useEffect, useState } from 'react';
import FeedDetail from '../Components/FeedDetail/FeedDetail';
import { useSelector, useDispatch } from 'react-redux';
import { FeedState } from '../modules/types';
import { setFeedContent, setFeedComments } from '../modules/feed';
import { RootState } from '../modules';

function DetailApp() {
  const [state, setState] = useState({
    loading: true,
  });
  const { loading } = state;
  const { feedContent, feedComments }: FeedState = useSelector((state: RootState) => state.feed);
  const dispatch = useDispatch();
  console.log('content', feedContent);

  const fetchFeedDetail = fetch('/feed-detail.json')
    .then((response) => response.json())
    .then(({ data }) => data)
    .catch((err) => console.error(err));

  const fetchFeedComments = fetch('/feed-comments.json')
    .then((response) => response.json())
    .then(({ data }) => data)
    .catch((err) => console.error(err));

  useEffect(() => {
    Promise.all([fetchFeedDetail, fetchFeedComments])
      .then(([feedContent, feedComments]) => {
        dispatch(setFeedContent(feedContent));
        dispatch(setFeedComments(feedComments));
      })
      .catch((err) => console.error(err));
  }, []);

  return <>{loading ? 'loading' : <FeedDetail {...feedContent} comments={feedComments} />}</>;
}

export default DetailApp;
