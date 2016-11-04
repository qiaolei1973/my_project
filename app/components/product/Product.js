import Line from '../line/Line';
import React from 'react';
import Static from '../../Static/Static';
import Util from '../../Util/Util';
import NavBar from '../NavBar';
import Footer from '../Footer';
//产品1
class Product1 extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = { product: null }
    }
    componentWillMount() {
        const {href} = this.props.params
        const product = Static.Product
        const _pro = product.filter(function (item) {
            return href === item.href
        })
        this.setState({ product: _pro[0] })
        //this.props.dispatch(getNews(id))
    }
    render() {
        let product = this.state.product
        if (!product) {
            return (
                <div>no such product</div>
            )
        }
        const createLine = function (item, index) {
            item.className = index % 2 === 0 ? 'right line-text' : 'left line-text'
            item.background = index % 2 === 0 ? { background: '#FFF' } : { background: '#f3f3f3' }
            const key = Util.getGuid()
            const id = 'product-' + index
            return <Line data={item} key={key} id={id}/>
        }
        return (
            <div>
                <NavBar />
                <section className='item-launcher'>
                    {product.items.map(createLine)}
                </section>
                <Footer />
            </div>
        )
    }
}

module.exports = Product1;
