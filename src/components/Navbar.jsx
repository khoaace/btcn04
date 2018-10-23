import React, { Component } from 'react';
import history from '../history';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { clearPhotoList } from '../actions';

class Navbar extends Component {
  handleSearch = async evt => {
    evt.preventDefault();
    if (this.refs.search.value === '&' || this.refs.search.value === '#')
      alert('Invalid');
    else {
      await this.props.clearPhotoList();
      await history.replace('/tag/' + this.refs.search.value);
    }
  };
  clickHome = async () => {
    this.props.clearPhotoList();
    history.replace('/');
  };
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">
              <a to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <i className="far fa-image" />
                1512557-Tran Dang Khoa
              </a>
            </span>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a onClick={this.clickHome}>Explore</a>
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
    );
  }
}

const mapStateToProps = state => ({
  photos: state.Photos.photos,
  currentPage: state.Photos.currentPage,
});

const mapDispatchToProps = dispatch => ({
  clearPhotoList: () => dispatch(clearPhotoList()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
);
