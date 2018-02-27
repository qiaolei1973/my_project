import { connect } from 'react-redux';
import Line from '../line/Line';
import Line2 from '../line/Line2';
import React from 'react';
import Static from '../../Static/Static';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { fetchProducts } from '../../actions/productAction';

//产品1
@connect((store) => {
    return {
        products: store.product.products
    }
})
class Product extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = { product: null }
    }
    componentWillMount() {
        const { href } = this.props.params
        const product = Static.Product
        let _pro = product.filter(function (item) {
            return href === item.href
        })
        if (!_pro.length) {
            this.props.dispatch(fetchProducts())
        }
        this.setState({ product: _pro[0] })
    }
    componentWillReceiveProps(nextProps) {
        const { products, params: { href } } = nextProps;
        if (products) {
            let _pro = products.filter(function (product) {
                return href === product.name;
            })
            if (_pro.length) {
                this.setState({ product: _pro[0] })
            }

        }
    }
    render() {
        let product = this.state.product
        if (!product) {
            return (
                <div>no such product</div>
            )
        }
        if (product._id) {
            const item = Object.assign({}, product);
            item.className = 'left line-text';
            item.background = { background: '#f3f3f3' };

            return (
                <div>
                    <NavBar />
                    <section className='item-launcher'>
                        <Line2 data={product} key={product.name} id={product._id} />
                    </section>
                    <Footer />
                </div>
            );
        }
        return (
            <div>
                <NavBar />
                <section className='item-launcher'>
                    {
                        product.items.map((item, index) => {
                            item.className = index % 2 === 0 ? 'right line-text' : 'left line-text'
                            item.background = index % 2 === 0 ? { background: '#FFF' } : { background: '#f3f3f3' }
                            const id = 'product_' + index;
                            return <Line data={item} key={id + '_' + Math.random()} id={id} />
                        })
                    }
                </section>
                <Footer />
            </div>
        )
    }
}

export default Product;
