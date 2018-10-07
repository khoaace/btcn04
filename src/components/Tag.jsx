import React, { Component } from 'react';
// Axios calls API
import axios from 'axios';
//Components
import GalleryGrid from './GalleryGrid';

class Tag extends Component {
  state = {
    urlAPI:
      'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6517187ddd2d0dde34a502f0bb2fc991&tags=' +
      this.props.match.tag +
      '&extras=url_l%2Curl_s%2Cowner_name%2Cviews&per_page=20&page=0&format=json&nojsoncallback=1',
    photos: [],
    currentPage: 0,
    currentImage: '',
    hasMore: true,
  };
  nextPage = async () => {
    let currentPage = this.state.currentPage;
    let photos = [];
    //Handle
    const newUrlAPI = this.state.urlAPI.replace(
      '&page=' + currentPage,
      '&page=' + parseInt(currentPage + 1, 10)
    );
    await axios.get(newUrlAPI).then(res => {
      if (res.data.photos.pages === currentPage) {
        this.setState({ hasMore: false });
      } else {
        photos = res.data.photos.photo.map((photo, index) => {
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
      }
    });
    await this.setState({
      urlAPI: newUrlAPI,
      currentPage: currentPage + 1,
      photos: this.state.photos.concat(photos),
    });
  };
  onClickImage = photo => {
    let input = photo.src;
    let posEnd = input.indexOf('_');
    let posStart = input.lastIndexOf('/');
    let output = input.slice(posStart + 1, posEnd);
    window.location.href = '/photo/' + output;
  };

  render() {
    return (
      <div style={{ width: '100%' }}>
        <GalleryGrid
          photos={this.state.photos}
          nextPage={this.nextPage}
          onClickImage={this.onClickImage}
          hasMore={this.state.hasMore}
        />
      </div>
    );
  }
}

export default Tag;
