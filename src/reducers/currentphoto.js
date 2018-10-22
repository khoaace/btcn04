import * as ActionTypes from '../constants/ActionTypes';

//Init Value of State
const initStatePhoto = {
  currentPhoto: {},
  urlPhoto: '',
};

const currentphoto = (state = initStatePhoto, action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PHOTO:
      console.log(action.photo);
      return Object.assign({}, state, {
        currentPhoto: { ...action.photo },
      });
    case ActionTypes.SET_URL_PHOTO:
      return Object.assign({}, state, {
        urlPhoto: action.url,
      });
    default:
      return state;
  }
};

export default currentphoto;
