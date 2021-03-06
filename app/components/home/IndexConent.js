import React from 'react';
import Static from '../../Static/Static';
import NavBar from '../NavBar';
import Footer from '../Footer'
//产品1
class IndexConent extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        var createLine = function(item,index){
            item.className = index % 2 === 0 ? 'right line-text' : 'left line-text';
            item.background = index % 2 === 0 ? {background:'#FFF'} : {background:'#f3f3f3'};
            return <Line data={item} key={item.key}/>
        }
        console.log(Static.Product1.items)
        return (
            <div>
            <section className='item-launcher'>
                {Static.Product1.items.map(createLine)}
            </section>
            </div>
        )
    }
}

module.exports = IndexConent;
