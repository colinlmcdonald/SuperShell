import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Character from './Character';
import Winner from './Winner';
import Attributes from './Attributes';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Character} />
  </Router>
);