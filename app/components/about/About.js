import React from 'react'
import Static from '../../Static/Static'
import Util from '../../Util/Util'
import NavBar from '../NavBar';
import Footer from '../Footer';
import DescLine from '../line/DescLine';

const { article, img } = Static.About;
//产品1
class About extends React.Component {
    render() {
        return <div>
            <NavBar />
            <section>
                <div className='line about'>
                    <span className='about-title'>
                        公司简介
                            </span>
                    {
                        article.map((item, index) =>
                            <p key={'article_' + index}>{item}</p>
                        )
                    }

                    {
                        img.map((item, index) =>
                            <DescLine key={'article_img_' + index} data={item} />
                        )
                    }
                </div>
            </section>
            <Footer />
        </div>
    }
}

export default About;