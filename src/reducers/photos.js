import * as ActionTypes from '../constants/ActionTypes';

//Init Value of State
const initStatePhoto = {
  photos: [],
  currentPage: 1,
};

const photos = (state = initStatePhoto, action) => {
  switch (action.type) {
    case ActionTypes.SET_PHOTOS_LIST:
      return {
        ...state,
        photos: [...state.photos, ...action.photos],
        currentPage: state.currentPage + 1,
      };
    case ActionTypes.CLEAR_PHOTOS_LIST:
      return {
        ...state,
        photos: [],
        currentPage: 0,
      };
    default:
      return state;
  }
};

export default photos;
