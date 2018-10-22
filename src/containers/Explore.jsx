import React, { Component } from 'react';
// Axios calls API
import axios from 'axios';
//Components
import * as helpers from '../helpers/getPhoto';
import GalleryGrid from '../components/GalleryGrid';
//Connect to Store
import { connect } from 'react-redux';
import { setPhotoData } from '../actions';
import { withRouter } from 'react-router';
import history from '../history';

class Explore extends Component {
  nextPage = async () => {
    console.log('chay roi ne ma');
    let API = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=6517187ddd2d0dde34a502f0bb2fc991&extras=url_s%2Curl_l%2Cowner_name%2Cviews&per_page=20&page=${
      this.props.currentPage
    }&format=json&nojsoncallback=1`;
    console.log(API);
    let photos = [];
    await helpers
      .getPhoto(API, this.props.currentPage)
      .then(result => {
        this.props.setPhotoData(result);
      })
      .catch(error => console.log(error));
  };
  onClickImage = photo => {
    let input = photo.src;
    let posEnd = input.indexOf('_');
    let posStart = input.lastIndexOf('/');
    let output = input.slice(posStart + 1, posEnd);
    history.replace('/photo/' + output);
  };

  render() {
    return (
      <div style={{ width: '100%' }}>
        <GalleryGrid
          photos={this.props.photos}
          nextPage={this.nextPage}
          onClickImage={this.onClickImage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.Photos.photos,
  currentPage: state.Photos.currentPage,
});

const mapDispatchToProps = dispatch => ({
  setPhotoData: image => dispatch(setPhotoData(image)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Explore)
);
