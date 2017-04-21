import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router';

import App from '../jsx/business/App.jsx';
import Login from '../jsx/business/Login.jsx';
import Column from '../jsx/business/Column.jsx';
import ColumnAddtop from '../jsx/business/ColumnAddtop.jsx';
import ColumnAll from '../jsx/business/ColumnAll.jsx';
import Shop from '../jsx/business/Shop.jsx';
import ShopAdd from '../jsx/business/ShopAdd.jsx';

let userid = window.localStorage.getItem('businessuserid');
if (userid !== '' && userid != null || !!userid !== false) {
  ReactDOM.render(
      <Router history={hashHistory}>
          <Route path='/' component={App}>
            <Route path='/column' component={Column}>
              <Route path='/column/addtop' component={ColumnAddtop}>
              </Route>
              <Route path='/column/addson' component={ColumnAddtop}>
              </Route>
              <Route path='/column/update' component={ColumnAddtop}>
              </Route>
              <Route path='/column/all' component={ColumnAll}>
              </Route>
              <Route path='/column/shop' component={Shop}>
                <Route path='/column/shop/add' component={ShopAdd}>
                </Route>
                <Route path='/column/shop/update' component={ShopAdd}>
                </Route>
              </Route>
            </Route>
          </Route>
      </Router>
  , document.getElementById('app'));
}
else {
  ReactDOM.render(
      <Router history={hashHistory}>
          <Route path='/' component={Login}>
          </Route>
      </Router>
  , document.getElementById('app'));
}
