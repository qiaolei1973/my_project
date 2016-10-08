import React from 'react'
import { render } from 'react-dom'
import {Provider} from "react-redux"
import Layout from './components/Layout'
import store from './store';
import {Cmp} from './test/reacttest'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import Summary from './components/Summary'
import Footer from './components/Footer'
import Static from './Static/Static';
import Product1 from './components/Product/Product1';
require('./css/style.scss')

render((
  // <Router history={hashHistory}>
  //   <Route path="/" component = {Link1}>
  //   <IndexRoute component = {Home}/>
  //     <Route path="/about" component = {About}/>
  //     <Route path="/repos" component = {Repo1}>
  //       <Route path="/repos/:userName/:repoName" component={Repo}/>
  //     </Route>
  //   </Route>
  // </Router>
  <div>
    <NavBar/>
    <Carousel/>
    <Product1/>
    <Footer data={Static.Footer}/>
  </div>
), document.getElementById('app'))
