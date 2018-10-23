import React, { Component } from 'react';
//Components
import * as helpers from '../helpers/Photos';
import * as Constant from '../constants/Initial';
import GalleryGrid from '../components/GalleryGrid';
//Connect to Store
import { connect } from 'react-redux';
import { setPhotoList } from '../actions';
import { clearPhotoList } from '../actions';
import { withRouter } from 'react-router';
import history from '../history';

class Explore extends Component {
  componentWillMount = async () => {
    await this.props.clearPhotoList();
  };
  nextPage = async () => {
    let API = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${
      Constant.API_KEY
    }&extras=url_s%2Curl_l%2Cowner_name%2Cviews&per_page=20&page=${
      this.props.currentPage
    }&format=json&nojsoncallback=1`;
    await console.log(API);
    await helpers
      .getPhotos(API, this.props.currentPage)
      .then(result => {
        this.props.setPhotoList(result);
      })
      .catch(error => console.log(error));
  };
  onClickImage = photo => {
    console.log(this.props.photos);
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
  setPhotoList: image => dispatch(setPhotoList(image)),
  clearPhotoList: () => dispatch(clearPhotoList()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Explore)
);
