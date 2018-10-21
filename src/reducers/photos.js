import * as ActionTypes from '../constants/ActionTypes';

//Init Value of State
const initStatePhoto = {
  photos: [],
  currentPage: 0,
  text: '',
};

const photos = (state = initStatePhoto, action) => {
  switch (action.type) {
    case ActionTypes.GET_PHOTO_DATA:
      return {
        photos: [...state.photos, action.photos],
        currentPage: state.currentPage + 1,
      };
    case ActionTypes.CLEAR_PHOTO_DATA:
      return {
        photos: [],
        currentPage: 0,
      };
    case ActionTypes.TEST:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

export default photos;
