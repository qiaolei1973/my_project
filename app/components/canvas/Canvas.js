import React from 'react'
import Static from '../../Static/Static'
import Util from '../../Util/Util'
import NavBar from '../NavBar'
import Footer from '../Footer'
import DescLine from '../line/DescLine'
//产品1
class Canvas extends React.Component {
    constructor(prop) {
        super(prop)
        this.draw = () => {
            var canvas = this.refs.canvas
            if(!canvas) return false
            var context = canvas.getContext('2d')
            var input = this.refs.input
            var value = input.value
            context.fillRect(0,0,value,value)
        }
    }
    componentWillMount() {
        this.draw()
    }
    render() {

        return (
            <div>
                <NavBar />
                <section>
                    <label>输入</label>
                    <input type='text' ref='input' onChange={this.draw}/>
                    <div style={{ width: '400px', height: '400px' }}>
                        <canvas ref='canvas'></canvas>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

module.exports = Canvas;