import React from 'react'
import Static from '../../Static/Static'
import Util from '../../Util/Util'
import NavBar from '../NavBar'
import Footer from '../Footer'
import DescLine from '../line/DescLine'
//产品1
class Product1 extends React.Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        const cases = Static.Case
        const createCase = (item) => {
            const key = Util.getGuid()
            return (
                <DescLine key={key} data={item} />
            )
        }
        return (
            <div>
                <NavBar />
                <span className='normal-title'>成功案例</span>
                {cases.map(createCase)}
                <Footer />
            </div>
        )
    }
}

module.exports = Product1;
