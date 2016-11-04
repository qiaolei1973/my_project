import React from 'react'
import Static from '../../Static/Static'
import Util from '../../Util/Util'
import NavBar from '../NavBar'
import Footer from '../Footer'
//产品1
class Joinus extends React.Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        const contact = Static.Contact
        const createContact = (item) => {
            const key = Util.getGuid()
            return (
                <div className='contact' key={key}>
                    <span>{item.name}:</span>
                    <p>{item.value}</p>
                </div>
            )
        }
        return (
            <div>
                <NavBar />
                <span className='normal-title'>开票信息</span>
                <div className='about-contact'>
                        {contact.map(createContact)}
                </div>
                <Footer />
            </div>
        )
    }
}

module.exports = Joinus;