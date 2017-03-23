import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router';

import App from '../jsx/App.jsx';
import Column from '../jsx/Column.jsx';
import ColumnAddtop from '../jsx/ColumnAddtop.jsx';
import ColumnAll from '../jsx/ColumnAll.jsx';
import Article from '../jsx/Article.jsx';
import ArticleAdd from '../jsx/ArticleAdd.jsx';
import Shop from '../jsx/Shop.jsx';
import ShopAdd from '../jsx/ShopAdd.jsx';
import Photo from '../jsx/Photo.jsx';
import PhotoAdd from '../jsx/PhotoAdd.jsx';
import Video from '../jsx/Video.jsx';
import VideoAdd from '../jsx/VideoAdd.jsx';

import User from '../jsx/User.jsx';
import Admin from '../jsx/Admin.jsx';
import AdminAdd from '../jsx/AdminAdd.jsx';

import Module from '../jsx/Module.jsx';

import System from '../jsx/System.jsx';
import SystemBasic from '../jsx/SystemBasic.jsx';

import Template from '../jsx/Template.jsx';
import TemplateUpdate from '../jsx/TemplateUpdate.jsx';

import Login from '../jsx/Login.jsx';

let userid = window.localStorage.getItem('biliuserid');

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
            <Route path='/column/article' component={Article}>
              <Route path='/column/article/add' component={ArticleAdd}>
              </Route>
              <Route path='/column/article/update' component={ArticleAdd}>
              </Route>
            </Route>
            <Route path='/column/shop' component={Shop}>
              <Route path='/column/shop/add' component={ShopAdd}>
              </Route>
              <Route path='/column/shop/update' component={ShopAdd}>
              </Route>
            </Route>
            <Route path='/column/photo' component={Photo}>
              <Route path='/column/photo/add' component={PhotoAdd}>
              </Route>
              <Route path='/column/photo/update' component={PhotoAdd}>
              </Route>
            </Route>
            <Route path='/column/video' component={Video}>
              <Route path='/column/video/add' component={VideoAdd}>
              </Route>
              <Route path='/column/video/update' component={VideoAdd}>
              </Route>
            </Route>
          </Route>
          <Route path='/user' component={User}>
            <Route path='/user/admin' component={Admin}>
              <Route path='/user/admin/add' component={AdminAdd}>
              </Route>
            </Route>
          </Route>
          <Route path='/module' component={Module}>
          </Route>
          <Route path='/system' component={System}>
            <Route path='/system/basic' component={SystemBasic}>
            </Route>
          </Route>
          <Route path='/template' component={Template}>
            <Route path='/template/update' component={TemplateUpdate}>
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
