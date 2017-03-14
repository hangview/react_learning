import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router,Route,hashHistory,IndexRedirect} from 'react-router'

import ApiPage from './container/apiPage'
import ThunkPage from './container/thunkPage'

ReactDOM.render(

    (<Router history={hashHistory}>
          <Route path="/" component={App}>
              <IndexRedirect to="api" component={ApiPage} />
              <Route path="api" component={ApiPage}/>
              <Route path="thunk" component={ThunkPage}/>
          </Route>
        </Router>

    ),
  document.getElementById('root')
);
