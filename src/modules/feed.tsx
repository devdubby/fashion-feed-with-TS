const SET_FEED_LIST = 'feed/SET_FEED_LIST' as const;

export const setFeedList = (data: object) => ({
  type: SET_FEED_LIST,
  payload: data,
});

interface FeedAction ReturnType<typeof setFeedList>;

interface FeedListState {
  feedList: {
    list: ListType[];
    totalListCount: number;
    totalPages: number;
    isNext: boolean;
  };
};

interface ListType {
  id: number;
  text: string;
  tags: string[];
  mdInfo: MdInfoType;
  mediaList: MediaListType[];
  createdAt: string;
};

interface MdInfoType {
  id: number;
  mdName: string;
  mdThumb: string;
  mdDesc: string;
};

interface MediaListType {
  id: number;
  type: string;
  url: string;
};

const initialState: FeedListState {
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
