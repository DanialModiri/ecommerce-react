import React from 'react';
import './Products.css'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { fetchPhones } from '../redux/actions/phones';
import Pagination from 'react-paginate'
import queryString from 'query-string'

const parseQuery = (query) => {

    return Object.keys(query).map(item => {
        if (Array.isArray(query[item]))
            return query[item].map(arrItem => `${item}[]=${arrItem}`).join('&');
        return `${item}=${query[item]}`
    }).join('&')
}

const Product = ({ product }) => {

    return <div className="product">
        <img src={product.image} />
        <p className="os">{product.os}</p>
        <p className="title">{product.name}</p>
        <p className="price">{product.price} $</p>
    </div>;
}


class Products extends React.Component {

    componentWillMount() {
        const search = window.location.search;
        const searchCopy = search.length > 0 ? search.slice(1, search.length) : '';

        const query = queryString.parse(searchCopy);

        Object.entries(query).forEach(item => {
            if (!isNaN(item[1])) {
                console.log(item[1])
                query[item[0]] = parseInt(item[1]);
            }
        })
        console.log('SEARCH QUERY', query)
        this.props.dispatch(fetchPhones(query));
    }

    render() {


        console.log(this.props)
        const { page } = this.props.query;

        const { number } = this.props;
        window.history.pushState({}, 'Title', '/?' + queryString.stringify(this.props.query));
        console.log(number)

        return <React.Fragment>
            <div className="card products">
                {(this.props.phones || []).map(product => <Product product={product} />)}
            </div>

            <Pagination
                forcePage={page - 1}
                containerClassName="pagination"
                nextLabel={<span className="fa fa-angle-left"></span>}
                previousLabel={<span className="fa fa-angle-right" />}
                className="pagination" onPageChange={(page) => {
                    this.props.dispatch(fetchPhones({ page: page.selected + 1 }))
                }} pageCount={number / 9} pageRangeDisplayed={4} marginPagesDisplayed={4} />
        </React.Fragment>;
    }

}

const mapStateToProps = (state) => state.phones;

export default connect(mapStateToProps)(Products);