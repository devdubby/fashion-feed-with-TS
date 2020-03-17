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

type MdInfoType = {
  id: number;
  mdName: string;
  mdThumb: string;
  mdDesc: string;
};

type MediaListType = {
  id: number;
  type: string;
  url: string;
};
