import React, { Component } from 'react';
import './App.css';
// Axios calls API
import axios from 'axios';
//Components
import Navbar from './components/navbar.jsx';
import Explore from './components/Explore.jsx';
import Photo from './components/Photo.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  state = {
    urlAPI: `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=6517187ddd2d0dde34a502f0bb2fc991&extras=url_s%2Curl_l%2Cowner_name%2Cviews&per_page=20&page=0&format=json&nojsoncallback=1`,
    photos: [],
    currentPage: 0,
    currentImage: '',
  };
  nextPage = async () => {
    let currentPage = this.state.currentPage;
    console.log(this.state.currentPage);
    let photos;
    //Handle
    const newUrlAPI = this.state.urlAPI.replace(
      '&page=' + currentPage,
      '&page=' + parseInt(currentPage + 1, 10)
    );
    console.log(newUrlAPI);
    await axios.get(newUrlAPI).then(res => {
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
    });
    await this.setState({
      urlAPI: newUrlAPI,
      currentPage: currentPage + 1,
      photos: this.state.photos.concat(photos),
    });
  };
  onClickImage = src => {
    const currentImage = src;
    this.setState({ currentImage: currentImage });
  };

  render() {
    return (
      <Router>
        <frameElement>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  1512557-Tran Dang Khoa
                </a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Page 1</a>
                </li>
                <li>
                  <a href="#">Page 2</a>
                </li>
              </ul>
              <form
                className="navbar-form navbar-left"
                action="/action_page.php"
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    name="search"
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="glyphicon glyphicon-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </nav>
          <Explore
            photos={this.state.photos}
            nextPage={this.nextPage}
            onClickImage={this.onClickImage}
          />
          <Route path="/photo/:url" component={Photo} />
        </frameElement>
      </Router>
    );
  }
}

export default App;
