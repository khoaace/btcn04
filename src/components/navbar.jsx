import React from 'react';
const Navbar = props => (
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
      <form className="navbar-form navbar-left" action="/action_page.php">
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
);

export default Navbar;
