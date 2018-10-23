import { combineReducers } from 'redux';
import Photos from './photos';
import CurrentPhoto from './currentphoto';

export default combineReducers({
  CurrentPhoto,
  Photos,
});
