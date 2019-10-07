import React, { useState } from 'react';
import './Category.css'

const Plus = ({ active, onClick }) => {
    return <div className="plus" onClick={onClick}>
        <div className="line-1" style={{ transform: active ? 'translate(-50%, -50%) rotate(90deg)' : 'translate(-50%, -50%)' }}></div>
        <div className="line-2"></div>
    </div>
}

const Node = ({ category }) => {
    const [display, setDisplay] = useState(false);
    return <li>
        <div className="category-content" onClick={() => {
            setDisplay(!display);
        }}>
            <Plus active={display} onClick={() => {
                setDisplay(!display);
            }} />
            <span className="label">
                {category.label}
            </span>
        </div>
        <ul style={{ maxHeight: display ? '450px' : '0' }}>
            {category.children.map((item, index) => <li key={index}>
                {item.label}
                <button className="btn-select">انتخاب</button>
            </li>)}
        </ul>
    </li>
}

const Category = ({ categories = [] }) => {

    return (<div className="card">
        <ul className="category">
            <h3 className="category-title">
                دسته
            </h3>
            <span className="fa fa-search" />
            {categories.map((category, index) => <Node
                key={index + 1}
                category={category}></Node>)}
        </ul>
    </div>

    )
}


export default Category;