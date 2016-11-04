import React from 'react';
import Util from '../../Util/Util';
import Static from '../../Static/Static';
//文字模板(加入我们)
class QuestionLine extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = Static.Questions;
        const createJobsLine = (item, index) => {
            const question = item.question;
            const answer = item.answer;
            const background = index % 2 === 0 ? { background: '#FFF' } : { background: '#f3f3f3' };
            const key = Util.getGuid();
            return (
                <div className='full-line' key={key} style={background}>
                    <div className='line'>
                        <div className='line-joinus'>
                            <div className=''>
                                <h4>Q:</h4>
                                {question}
                                <h4>A:</h4>
                                {answer}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <section>
                {data.map(createJobsLine)}
            </section>
        )
    }
}

module.exports = QuestionLine;