
import { combineReducers } from 'redux';
import feed from './feed';

const rootReducer = combineReducers({
  feed
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;