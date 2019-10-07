import React from 'react'
import './Breadcrumb.css'

const Breadcrumb = ({ items = [], style }) => {

    return <ul className="breadcumb" style={style}>
        {items.map((item, index) => <li key={index + 1}>
            <a href={item.url}>{item.label}</a>
        </li>)}
    </ul>
}

export default Breadcrumb;