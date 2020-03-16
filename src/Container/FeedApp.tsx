import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeedList from '../Components/FeedList';
import { RootState } from '../modules';
import { setFeedList } from '../modules/feed';

function FeedApp() {
  const dispatch = useDispatch();
  const feedList = useSelector((state: RootState) => state.feed);
  console.log('feedlist', feedList);

  const callApi = useCallback(() => {
    fetch('/feed-list.json')
      .then((response) => response.json())
      .then(({ data }) => {
        dispatch(setFeedList(data));
      })
      .catch((err) => console.error(err));
  }, [dispatch]);

  useEffect(() => {
    callApi();
  }, [callApi]);

  return (
    <div>
      <FeedList />
    </div>
  );
}

export default FeedApp;
