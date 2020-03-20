import { FeedContentType } from '../modules/types';

class Feed {
  // id: number;
  // text: string;
  // tags: [];
  // likedCount: number;
  // replyCount: number;
  // sharedCount: number;

  // constructor() {
  //   this.id = 0;
  //   this.text = '',
  //   this.tags = [],
  //   this.likedCount = 0,
  //   this.replyCount = 0,
  //   this.sharedCount = 0
  // }

  get objKeys() {
    return Object.keys(this);
  }
}

export const feedModel = (data: object): void => {
  // const myFeedModel = new Feed();
  // console.log('my', myFeedModel.objKeys, Object.keys(data));
  // Object.keys(data).map(key => {
  //   myFeedModel.hasOwnProperty(key);
  // });
};
