import React from 'react';
import Static from '../../Static/Static';
import NavBar from '../NavBar';
import Footer from '../Footer';
import QuestionLine from '../line/QuestionLine';
import ImgLine from '../line/ImgLine';
//产品1
class Questions extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div>
                <NavBar />
                <ImgLine img='ie-big.jpg'/>
                <QuestionLine/>
                <Footer />
            </div>
        )
    }
}

module.exports = Questions;