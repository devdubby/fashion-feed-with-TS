import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeedList from '../Components/FeedList/FeedList';
import { RootState } from '../modules';
import { setFeedList } from '../modules/feed';
import { FeedListType } from '../modules/types';

function FeedApp() {
  const [state, setState] = useState({
    loading: true,
  });
  const { loading } = state;
  const dispatch = useDispatch();
  const feedList: FeedListType = useSelector((state: RootState) => state.feed.feedList);
  console.log('test', feedList)

  const callApi = useCallback(() => {
    fetch('/feed-list.json')
      .then((response) => response.json())
      .then(({ data }) => {
        dispatch(setFeedList(data));
        setState({
          loading: false,
        });
      })
      .catch((err) => console.error(err));
  }, [dispatch]);

  useEffect(() => {
    callApi();
  }, [callApi]);

  return <>{loading ? 'loading' : <FeedList feedList={feedList} />}</>;
}

export default FeedApp;
