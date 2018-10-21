import * as ActionTypes from '../constants/ActionTypes';

export const getPhotoData = image => ({
  type: ActionTypes.GET_PHOTO_DATA,
  photo: image,
});

export const clearPhotoData = () => ({
  type: ActionTypes.CLEAR_PHOTO_DATA,
});

export const getInfo = text => ({
  type: ActionTypes.TEST,
  text: text,
});
