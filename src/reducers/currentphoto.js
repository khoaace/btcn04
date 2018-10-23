import * as ActionTypes from '../constants/ActionTypes';
import { fromJS } from 'immutable';

//Init Value of State
const initialState = fromJS({
  currentPhoto: { a: 'b', c: 'd' },
  urlPhoto: 'hahaha',
});

const Currentphoto = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_URL_PHOTO:
      return state.set('currentPhoto', action.photo);
    case ActionTypes.SET_CURRENT_PHOTO:
      return state.set('urlPhoto', action.url);
    default:
      return state;
  }
};

export default Currentphoto;
