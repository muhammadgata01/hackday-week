import { combineReducers } from 'redux';
import PostReducer from './PostReducer';

const reducers = combineReducers({
  Post: PostReducer,
});

export default reducers;
