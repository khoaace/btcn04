import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';
import { routesMain } from './routes/index';

class App extends Component {
  handleSearch = async evt => {
    evt.preventDefault();
    if (this.refs.search.value === '&' || this.refs.search.value === '#')
      alert('Invalid');
    else window.location.href = '/tag/' + this.refs.search.value;
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div>
            <Navbar />
            {routesMain()}
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
