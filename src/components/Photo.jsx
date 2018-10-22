import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: '',
      tags: [],
      photo: [],
      urlPhoto: '',
      description: '',
    };
  }
  componentWillMount = async () => {
    let photo, urlPhoto, tags, description, title, username;
    let apiUrlInfo =
      'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=6517187ddd2d0dde34a502f0bb2fc991&photo_id=' +
      this.props.match.params.id +
      '&format=json&nojsoncallback=1';
    let apiUrlPhotoSrc =
      'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=6517187ddd2d0dde34a502f0bb2fc991&photo_id=' +
      this.props.match.params.id +
      '&format=json&nojsoncallback=1';
    await axios.get(apiUrlInfo).then(res => {
      photo = res.data.photo;
      tags = res.data.photo.tags.tag;
      description = res.data.photo.description._content;
      username = res.data.photo.owner.username;
      title = res.data.photo.title._content;
    });
    await axios.get(apiUrlPhotoSrc).then(res => {
      urlPhoto = res.data.sizes.size[res.data.sizes.size.length - 4].source;
    });

    await this.setState({
      photo: photo,
      urlPhoto: urlPhoto,
      tags: tags,
      description: description,
      username: username,
      title: title,
    });
    await console.log(photo);
  };

  render() {
    const renderTags = this.state.tags.map((tag, index) => (
      <span className="label label-primary" key={index}>
        <a
          href={'/tag/' + tag._content}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          {tag._content}
        </a>
      </span>
    ));
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="card-container centermx drop-shadow lifted">
            <div className="card">
              <div className="card-header">{this.state.title}</div>
              <div className="card-body">
                <center>
                  <img src={this.state.urlPhoto} alt="imagess" />
                </center>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <center>
          <small> Upload by </small>
          <strong>{this.state.username}</strong>
          <h5>Description : {this.state.description}</h5>
          <hr style={{ margin: '8px auto' }} />
          <div className="container"> {renderTags}</div>
        </center>
        <br /> <br />
      </div>
    );
  }
}

export default withRouter(Photo);
