import * as ActionTypes from '../constants/ActionTypes';

export const setPhotoData = image => ({
  type: ActionTypes.SET_PHOTO_DATA,
  photos: image,
});

export const clearPhotoData = () => ({
  type: ActionTypes.CLEAR_PHOTO_DATA,
});
