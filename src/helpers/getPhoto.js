// Get photos by calling API of flickr by Axios
import axios from 'axios';

export const getPhoto = (APIUrl = '', currentPage) => {
  return new Promise((resolve, reject) => {
    axios
      .get(APIUrl)
      .then(res => {
        if (res.data.photos.pages === currentPage) {
          return [];
        } else {
          let photos = res.data.photos.photo.map((photo, index) => {
            const width = parseInt(photo.width_s, 10);
            const height = parseInt(photo.height_s, 10);
            return {
              src: photo.url_l,
              thumbnail: photo.url_s,
              thumbnailWidth: width,
              thumbnailHeight: height,
              caption: photo.title,
              info: { owner: photo.ownername, views: photo.views },
            };
          });
          resolve(photos);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
