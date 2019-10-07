import React from 'react';
import { connect } from 'react-redux'
import { distinct } from '../phonedata';
import Filter from './Filter';
import { SET_PHONES } from '../redux/actionTypes/phone';
import './Sidemenu.css'
const filters = {
    'os': { label: 'سیستم عامل', items: distinct('os') },
    'camera': { label: 'دوربین', items: distinct('camera') },
    'brand': { label: 'سازنده', items: distinct('brand') }
};

const Sidemenu = ({ query, dispatch }) => {
    const onChange = ({ name, value }) => {
        dispatch({ type: SET_PHONES, payload: { [name]: value } })
    }


    console.log(query)
    return <div className="sidemenu">
        {Object.entries(filters).map(filter => <Filter
            onChange={onChange}
            style={{ marginTop: 8 }}
            value={query[filter[0]]}
            name={filter[0]}
            label={filter[1].label}
            items={filter[1].items} />)}
    </div>
}

const mapStateToProps = state => state.phones;
export default connect(mapStateToProps)(Sidemenu);