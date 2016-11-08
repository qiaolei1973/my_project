import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import QuestionLine from '../line/QuestionLine';
//常见问题
class Questions extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div>
                <NavBar />
                <QuestionLine/>
                <Footer />
            </div>
        )
    }
}

module.exports = Questions;