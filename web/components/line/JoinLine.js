import React from 'react';
import Util from '../../Util/Util';
import Static from '../../Static/Static';
//文字模板(加入我们)
class JoinLine extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = Static.Joinus;
        //const data = this.props.data;
        const createRes_p = (responsibility) => {
            const key = Util.getGuid();
            return (
                <p key={key}>-{responsibility}</p>
            )
        }
        const createNeed_p = (need) => {
            const key = Util.getGuid();
            return (
                <p key={key}>-{need}</p>
            )
        }
        const createJobsLine = (item, index) => {
            const responsibilitys = item.responsibilitys;
            const needs = item.needs;
            const background = index % 2 === 0 ? { background: '#FFF' } : { background: '#f3f3f3' };
            const key = Util.getGuid();
            return (
                <div className='full-line' key={key} style={background}>
                    <div className='line'>
                        <div className='line-text'>
                            <h4>{data.job}</h4>
                            <h4>岗位职责：</h4>
                            {responsibilitys.map(createRes_p)}
                            <h4>任职要求：</h4>
                            {responsibilitys.map(createNeed_p)}
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

module.exports = JoinLine;