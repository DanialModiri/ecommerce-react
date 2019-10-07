import React from 'react';
import './Sort.css'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { fetchPhones } from '../redux/actions/phones'

const sorts = [
    { name: 'price', direction: 1, label: 'ارزانترین' },
    { name: 'price', direction: -1, label: 'گرانترین' },
]

const Sort = ({ query, dispatch }) => {
    const {sort = 'price', direction = -1 } = query;
    return <div className="sort card">
        {sorts.map(item => <button 
        onClick={() => {
            dispatch(fetchPhones({ sort: item.name, direction: item.direction }))
        }}
        className={classnames('chip', {
            selected: sort === item.name && item.direction === direction
        })}>
            {item.label}
        </button>)}
    </div>
}

const mapStateToProps = (state) => state.phones;
export default connect(mapStateToProps)(Sort);