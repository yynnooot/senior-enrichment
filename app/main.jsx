'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import Main from './components/Main.js'
import Nav from './components/Nav.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store'

render (
  <Provider store={store}>
    <Router>

      <div>
        <div>
          <Nav />
        </div>

        <div>
          <Switch>
            <Route exact path="/" component= { Main } />
          </Switch>      
        </div>
      </div>

    </Router> 
  </Provider>,
  document.getElementById('main')
)