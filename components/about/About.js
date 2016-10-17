import Line from '../Line';
import React from 'react';
import Static from '../../Static/Static';
import NavBar from '../NavBar';
import Footer from '../Footer';
//产品1
class About extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = Static.About;
        return (
            <div>
                <NavBar />
                <section>
                    <div className='line about'>
                        <span className='about-title'>
                            北京xx公司
                        </span>
                        <p>{data.article}</p>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

module.exports = About;