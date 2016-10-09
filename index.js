import React from 'react'
import { render } from 'react-dom'
import {Provider} from "react-redux"
import store from './store';
import Home from './components/home/Home'
import Product1 from './components/product/Product1'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
require('./css/style.scss')

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
        <IndexRoute component={Home}/>
        <Route path="/product1" component={Product1} />
    </Route>
</Router>
), document.getElementById('app'))
