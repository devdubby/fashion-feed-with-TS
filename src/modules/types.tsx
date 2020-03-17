export type FeedListState = {
  feedList: FeedListType;
};

export type FeedListType = {
  list: ListType[];
  totalListCount: number;
  totalPages: number;
  isNext: boolean;
};

export type ListType = {
  id: number;
  text: string;
  tags: string[];
  mdInfo: MdInfoType;
  mediaList: MediaListType[];
  createdAt: string;
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
  feedContent: FeedContentDataType;
};

export type FeedContentDataType = {
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
