import React, { Component } from 'react';

class Navbar extends Component {
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
              <a to="/">Explore</a>
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

export default Navbar;
