import React, { Component } from 'react';
import './App.css';
// Axios calls API
//Components
import Photo from './components/Photo.jsx';
import Explore from './components/Explore.jsx';
import Tag from './components/Tag.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  handleSearch = async evt => {
    evt.preventDefault();
    if (this.refs.search.value === '&' || this.refs.search.value === '#')
      alert('Invalid');
    else window.location.href = '/tag/' + this.refs.search.value;
  };

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <span className="navbar-brand">
                  <Link
                    to="/"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <i className="far fa-image" />
                    1512557-Tran Dang Khoa
                  </Link>
                </span>
              </div>
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/">Explore</Link>
                </li>
              </ul>
              <form
                className="navbar-form navbar-left"
                onSubmit={this.handleSearch}
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    name="search"
                    ref="search"
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
          <Route exact path="/" render={props => <Explore />} />
          <Route
            exact
            path="/tag/:tag"
            render={props => <Tag match={props.match.params} />}
          />
          <Route
            exact
            path="/photo/:id"
            render={props => <Photo match={props.match.params} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
