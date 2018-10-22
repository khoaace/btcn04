import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Explore from '../containers/Explore';
import PhotoInfo from '../containers/PhotoInfo';
import history from '../history';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Explore />,
  },
  {
    path: '/tag/:tag_search',
    exact: false,
    main: () => <PhotoInfo />,
  },
  {
    path: '/photo/:id',
    exact: false,
    main: () => <PhotoInfo />,
  },
];

export const routesMain = () => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }
  return (
    <Router history={history}>
      <Switch>{result}</Switch>
    </Router>
  );
};

// WEBPACK FOOTER //
// src/utils/routes.js
