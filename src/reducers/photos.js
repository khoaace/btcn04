import * as ActionTypes from '../constants/ActionTypes';

//Init Value of State
const initStatePhoto = {
  photos: [],
  currentPage: 0,
};

const photos = (state = initStatePhoto, action) => {
  switch (action.type) {
    case ActionTypes.SET_PHOTO_DATA:
      return {
        photos: [...state.photos, ...action.photos],
        currentPage: state.currentPage + 1,
      };
    case ActionTypes.CLEAR_PHOTO_DATA:
      return {
        photos: [],
        currentPage: 0,
      };
    default:
      return state;
  }
};

export default photos;
