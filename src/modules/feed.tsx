import {
  FeedState, FeedListType, FeedContentType, FeedCommentsType,
} from './types';

const SET_FEED_LIST = 'feed/SET_FEED_LIST' as const;
const SET_FEED_CONTENT = 'feed/SET_FEED_CONTENT' as const;
const SET_FEED_COMMENTS = 'feed/SET_FEED_COMMENTS' as const;

export const setFeedList = (data: FeedListType) => ({
  type: SET_FEED_LIST,
  payload: data,
});

export const setFeedContent = (data: FeedContentType) => ({
  type: SET_FEED_CONTENT,
  payload: data,
});

export const setFeedComments = (data: FeedCommentsType) => ({
  type: SET_FEED_COMMENTS,
  payload: data,
});

type FeedAction =
  | ReturnType<typeof setFeedList>
  | ReturnType<typeof setFeedContent>
  | ReturnType<typeof setFeedComments>;

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
    case SET_FEED_CONTENT:
      return {
        ...state,
        feedContent: action.payload,
      };
    case SET_FEED_COMMENTS:
      return {
        ...state,
        feedComments: action.payload,
      };
    default:
      return state;
  }
}

export default feed;
