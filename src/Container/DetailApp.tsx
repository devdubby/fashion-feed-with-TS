import React, { useCallback, useEffect, useState } from 'react';
import FeedDetail from '../Components/FeedDetail';
import { FeedContentType } from '../modules/types';

function DetailApp() {
  const [state, setState] = useState({
    feedContent: {
      id: 0,
      text: '',
      tags: [],
      likedCount: 0,
      replyCount: 0,
      sharedCount: 0,
      mdInfo: {
        id: 0,
        mdName: '',
        mdThumb: '',
        mdDesc: '',
      },
      mediaList: [],
      createdAt: '',
    },
    loading: true,
  });
  const { loading, feedContent } = state;
  console.log('content', feedContent);

  const callApi = useCallback(() => {
    fetch('/feed-detail.json')
      .then((response) => response.json())
      .then(({ data: feedContent }) => {
        // dispatch(setFeedList(data));
        setState({
          feedContent,
          loading: false,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    callApi();
  }, [callApi]);

  return <>{loading ? 'loading' : <FeedDetail {...feedContent} />}</>;
}

export default DetailApp;
