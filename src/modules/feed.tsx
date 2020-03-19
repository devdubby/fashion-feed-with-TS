import {
  FeedState, FeedListType, FeedContentType, FeedCommentsType,
} from './types';

const SET_FEED_LIST = 'feed/SET_FEED_LIST' as const;
const SET_FEED_DETAIL_CONTENT = 'feed/SET_FEED_DETAIL_CONTENT' as const;

export const setFeedList = (data: FeedListType) => ({
  type: SET_FEED_LIST,
  payload: data,
});

export const setFeedDetailContent = (
  feedContent: FeedContentType,
  feedComments: FeedCommentsType, 
) => ({
  type: SET_FEED_DETAIL_CONTENT,
  payload: {
    feedContent,
    feedComments,
  },
});

type FeedAction = ReturnType<typeof setFeedList> | ReturnType<typeof setFeedDetailContent>;

const initialState: FeedState = {
  feedList: {
    list: [],
    totalListCount: 0,
    totalPages: 0,
    isNext: false,
  },
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
  feedComments: {
    list: [],
    totalListCount: 0,
    totalPages: 0,
    isNext: false,
  },
};

function feed(state: FeedState = initialState, action: FeedAction): FeedState {
  switch (action.type) {
    case SET_FEED_LIST:
      return {
        ...state,
        feedList: action.payload,
      };
    case SET_FEED_DETAIL_CONTENT:
      return {
        ...state,
        feedContent: action.payload.feedContent,
        feedComments: action.payload.feedComments,
      };
    default:
      return state;
  }
}

export default feed;
