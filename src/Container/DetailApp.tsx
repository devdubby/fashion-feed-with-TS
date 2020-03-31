import React, { useEffect, useState } from 'react';
import FeedDetail from '../Components/FeedDetail/FeedDetail';
import { useSelector, useDispatch } from 'react-redux';
import { FeedState } from '../modules/types';
import { setFeedDetailContent } from '../modules/feed';
import { RootState } from '../modules';

function DetailApp() {
  const [state, setState] = useState({
    loading: true,
  });
  const { loading } = state;
  const { feedContent, feedComments }: FeedState = useSelector((state: RootState) => state.feed);
  const dispatch = useDispatch();

  const fetchFeedDetail = fetch('/detail')
    .then((response) => response.json())
    .then(({ data }) => data)
    .catch((err) => console.error(err));

  const fetchFeedComments = fetch('/comments')
    .then((response) => response.json())
    .then(({ data }) => data)
    .catch((err) => console.error(err));

  useEffect(() => {
    Promise.all([fetchFeedDetail, fetchFeedComments])
      .then(([feedContent, feedComments]) => {
        dispatch(setFeedDetailContent(feedContent, feedComments));
        setState({
          loading: false,
        })
      })
      .catch((err) => console.error(err));
  }, [dispatch]);

  return <>{loading ? 'loading' : <FeedDetail {...feedContent} feedComments={feedComments} />}</>;
}

export default DetailApp;
