export type FeedState = {
  feedList: FeedListType;
  feedContent: FeedContentType;
  feedComments: FeedCommentsType;
};

export type FeedListType = {
  list: FeedContentType[];
  totalListCount: number;
  totalPages: number;
  isNext: boolean;
};

export type MdInfoType = {
  id: number;
  mdName: string;
  mdThumb: string;
  mdDesc: string;
};

export type MediaListType = {
  id: number;
  type: string;
  url: string;
};

export type FeedContentType = {
  id: number;
  text: string;
  tags: string[];
  likedCount?: number;
  replyCount?: number;
  sharedCount?: number;
  mdInfo: MdInfoType;
  mediaList: MediaListType[];
  createdAt: string;
};

export type FeedCommentsType = {
  list: CommentsListDataType[];
  totalListCount: number;
  totalPages: number;
  isNext: boolean;
};

type CommentsListDataType = {
  id: number;
  feedId: number;
  userName: string;
  userProfileUrl: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  editable: boolean;
};
