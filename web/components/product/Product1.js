import Line from '../Line';
import React from 'react';
import Static from '../../Static/Static';
//产品1
class Product1 extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        var createLine = function(item,index){
            item.className = index % 2 === 0 ? 'right line-text' : 'left line-text';
            item.background = index % 2 === 0 ? {background:'blue'} : {background:'red'};
            return <Line data={item} key={item.key}/>
        }
        console.log(Static.Product1.items)
        return (
            <section className='item-launcher'>
                {Static.Product1.items.map(createLine)}
            </section>
        )
    }
}

module.exports = Product1;
