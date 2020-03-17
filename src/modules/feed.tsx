import { FeedListState, FeedListType } from './types';

const SET_FEED_LIST = 'feed/SET_FEED_LIST' as const;

export const setFeedList = (data: FeedListType) => ({
  type: SET_FEED_LIST,
  payload: data,
});

type FeedAction = ReturnType<typeof setFeedList>;

const initialState: FeedListState = {
  feedList: {
    list: [],
    totalListCount: 0,
    totalPages: 0,
    isNext: false,
  },
};

function feed(state: FeedListState = initialState, action: FeedAction): FeedListState {
  switch (action.type) {
    case SET_FEED_LIST:
      return {
        feedList: action.payload,
      };
    default:
      return state;
  }
}

export default feed;
