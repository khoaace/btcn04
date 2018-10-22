import * as ActionTypes from '../constants/ActionTypes';

export const setPhotoList = photos => ({
  type: ActionTypes.SET_PHOTOS_LIST,
  photos: photos,
});

export const setPhotoCurrent = photo => ({
  type: ActionTypes.SET_CURRENT_PHOTO,
  photo: photo,
});

export const setUrlPhoto = url => ({
  type: ActionTypes.SET_URL_PHOTO,
  url: url,
});

export const clearPhotoList = () => ({
  type: ActionTypes.CLEAR_PHOTOS_LIST,
});
