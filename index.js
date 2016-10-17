import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux"
import store from './store';
import Home from './components/home/Home'
import Product1 from './components/product/Product1'
import Product2 from './components/product/Product2'
import About from './components/about/About'
import Joinus from './components/about/Joinus'
import Supports from './components/supports/Supports'
import Questions from './components/supports/Questions'
import Admin from './components/login/Admin'
import News from './components/news/News'
import Layout from './components/Layout'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
require('./scss/style.scss')

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={Home} />
            </Route>
            <Route path="/product1" component={Product1} />
            <Route path="/product2" component={Product2} />
            <Route path="/about" component={About} />
            <Route path="/joinus" component={Joinus} />
            <Route path="/supports" component={Supports} />
            <Route path="/questions" component={Questions} />
            <Route path="/admin" component={Admin} />
            <Route path="/news" component={News} />
            <Route path="/layout" component={Layout} />
        </Router>
    </Provider>
), document.getElementById('app'))
