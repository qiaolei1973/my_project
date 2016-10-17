import React from 'react';
import NavBar from '../NavBar'
import Carousel from './Carousel'
import Footer from '../Footer'
import Static from '../../Static/Static';
import IndexConent from './IndexConent';

//起始页
class Home extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;
        return (
            <div>
                <NavBar/>
                <Carousel/>
                <Footer data={Static.Footer}/>
            </div>
        )
    }
}

module.exports = Home;