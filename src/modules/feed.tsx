const SET_FEED_LIST = 'feed/SET_FEED_LIST' as const;

export const setFeedList = (data: object) => ({
  type: SET_FEED_LIST,
  payload: data,
});

type FeedAction ReturnType<typeof setFeedList>;

type FeedListState {
  feedList: {
    list: ListType[];
    totalListCount: number;
    totalPages: number;
    isNext: boolean;
  };
};

type ListType {
  id: number;
  text: string;
  tags: string[];
  mdInfo: MdInfoType;
  mediaList: MediaListType[];
  createdAt: string;
};

type MdInfoType {
  id: number;
  mdName: string;
  mdThumb: string;
  mdDesc: string;
};

type MediaListType {
  id: number;
  type: string;
  url: string;
};

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
