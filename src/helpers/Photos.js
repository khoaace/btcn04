// Get photos by calling API of flickr by Axios
import axios from 'axios';

export const getPhotos = (APIUrl = '', currentPage) => {
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

export const getPhotoInfo = (APIUrl = '') => {
  return new Promise((resolve, reject) => {
    axios
      .get(APIUrl)
      .then(res => {
        let photos = {
          photo: res.data.photo,
          tags: res.data.photo.tags.tag,
          description: res.data.photo.description._content,
          username: res.data.photo.owner.username,
          title: res.data.photo.title._content,
        };
        resolve(photos);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getPhotoUrl = (APIUrl = '') => {
  return new Promise((resolve, reject) => {
    axios
      .get(APIUrl)
      .then(res => {
        resolve(res.data.sizes.size[res.data.sizes.size.length - 4].source);
      })
      .catch(error => {
        reject(error);
      });
  });
};
