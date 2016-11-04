import React from 'react'
import Static from '../../Static/Static'
import Util from '../../Util/Util'
import NavBar from '../NavBar'
import Footer from '../Footer'
import DescLine from '../line/DescLine'
//产品1
class About extends React.Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        const {article, img} = Static.About
        const createArticle = (item) => {
            const key = Util.getGuid()
            return <p key={key}>{item}</p>
        }
        const createImg = (item) => {
            const key = Util.getGuid()
            return (
              <DescLine key={key} data={item}/>
            )
        }
        return (
            <div>
                <NavBar />
                <section>
                    <div className='line about'>
                        <center>
                            <span className='about-title'>
                                公司简介
                        </span>
                        </center>
                        {article.map(createArticle)}
                        {img.map(createImg)}
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

module.exports = About;