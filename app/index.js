import React from 'react'
import axios from 'axios';
import { render } from 'react-dom'
import { Provider } from "react-redux"
import store from './store';
import Home from './components/home/Home'
import Product1 from './components/product/Product'
import Case from './components/case/Case'
import About from './components/about/About'
import Contact from './components/about/Contact'
import Joinus from './components/about/Joinus'
import Supports from './components/supports/Supports'
import Questions from './components/supports/Questions'
import NewsPage from './components/administor/NewsPage'
import Admin from './components/administor/Admin'
import News from './components/news/News'
import ProductsEdit from './components/product/ProductsEdit'
import NewsPage1 from './components/news/NewsPage'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
require('./scss/style.scss')
import jQuery from 'jquery';
import 'antd/dist/antd.css';
window.jQuery = jQuery;
window.$ = jQuery;

require('bootstrap')

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={Home} />
            </Route>
           <Route path="/product/:href" component={Product1} />
            <Route path="/case" component={Case} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/joinus" component={Joinus} />
            <Route path="/supports" component={Supports} />
            <Route path="/questions" component={Questions} />
            <Route path="/admin" component={Admin} />
            <Route path="/admin/news" component={NewsPage} />
            <Route path="/news" component={News} />
            <Route path="/news/:id" component={NewsPage1} />
            <Route path="/admin/products" component={ProductsEdit} />
        </Router>
    </Provider>
), document.getElementById('app'))
