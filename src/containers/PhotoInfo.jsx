import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setPhotoCurrent } from '../actions';
import { setUrlPhoto } from '../actions';
import * as helpers from '../helpers/Photos';
import Photo from '../components/Photo';

class PhotoInfo extends Component {
  componentWillMount = async () => {};
  getData = async () => {
    let apiUrlInfo =
      'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=6517187ddd2d0dde34a502f0bb2fc991&photo_id=' +
      this.props.match.params.id +
      '&format=json&nojsoncallback=1';

    let apiUrlPhotoSrc =
      'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=6517187ddd2d0dde34a502f0bb2fc991&photo_id=' +
      this.props.match.params.id +
      '&format=json&nojsoncallback=1';

    await helpers
      .getPhotoInfo(apiUrlInfo)
      .then(result => {
        this.props.setPhotoCurrent(result);
      })
      .catch(error => console.log(error));

    await helpers
      .getPhotoUrl(apiUrlPhotoSrc)
      .then(result => {
        this.props.setUrlPhoto(result);
      })
      .catch(error => console.log(error));
  };
  render() {
    this.getData();
    return (
      <Photo photo={this.props.currentPhoto} urlPhoto={this.props.urlPhoto} />
    );
  }
}

const mapStateToProps = state => ({
  currentPhoto: state.CurrentPhoto.currentPhoto,
  urlPhoto: state.CurrentPhoto.urlPhoto,
});

const mapDispatchToProps = dispatch => ({
  setPhotoCurrent: photo => dispatch(setPhotoCurrent(photo)),
  setUrlPhoto: url => dispatch(setUrlPhoto(url)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PhotoInfo)
);
