import Line from '../Line';
import React from 'react';
import Static from '../../Static/Static';
import NavBar from '../NavBar';
import Footer from '../Footer';
//产品1
class Supports extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div>
                <NavBar />
                <section>
                    <div>hello world</div>
                </section>
                <Footer />
            </div>
        )
    }
}

module.exports = Supports;