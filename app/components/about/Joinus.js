import React from 'react';
import Static from '../../Static/Static';
import NavBar from '../NavBar';
import Footer from '../Footer';
import JoinLine from '../line/JoinLine';
//产品1
class Joinus extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div>
                <NavBar />
                    <JoinLine/>
                <Footer />
            </div>
        )
    }
}

module.exports = Joinus;