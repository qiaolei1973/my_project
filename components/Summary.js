import React from 'react';
import BusinessCard from './BusinessCard';
import NewsCard from './NewsCard'
import IntroduceCard from './IntroduceCard';
import Product from './Product'
import Footer from './Footer'

//主要内容
class Summary extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data_inc = this.props.data.IntroduceCard;
        const data_news = this.props.data.NewsCard;
        const data_business = this.props.data.BusinessCard;
        const data_product = this.props.data.Product;
        const data_footer = this.props.data.Footer;
        return (
            <section>
                <div className="container summary">
                    <div className="row" id="summary-container">
                        <IntroduceCard data={data_inc}/>
                        <NewsCard data={data_news}/>
                        <BusinessCard data={data_business}/>
                    </div>
                    <Product data={data_product}/>
                    <Footer data={data_footer}/>
                </div>
            </section>
        )
    }
}

module.exports = Summary;