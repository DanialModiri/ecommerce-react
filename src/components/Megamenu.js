import React from 'react';
import './Megamenu.css'

const categories = [
    {
        label: 'کالای دیجیتال', img: './digital-products.png',children: [
            {
                label: 'موبایل', children: [
                    { label: 'سامسونگ' },
                    { label: 'سونی' },
                    { label: 'اپل' },
                    { label: 'هواویی' }
                ]
            },
            { label: 'کنسول بازی', children: [
                { label: 'Xbox' },
                { label: 'Playstation' }
            ] },
            { label: 'لپتاپ', children: [
                { label: 'Asus' },
                { label: 'HP' },
                { label: 'Sony' },
                { label: 'Lenovo' },
                { label: 'Acer' },
                { label: 'MSI' }
            ] },

            { label: 'لوازم جانبی موبایل', children: [
                { label: 'سامسونگ' },
                { label: 'سونی' },
                { label: 'اپل' },
                { label: 'هواویی' }
            ] },
            { label: 'لوازم جانبی لپ تاپ', children: [
                { label: 'Asus' },
                { label: 'HP' },
                { label: 'Sony' },
                { label: 'Lenovo' },
                { label: 'Acer' },
                { label: 'MSI' }
            ] },
            { label: 'تبلت', children: [
                { label: 'سامسونگ' },
                { label: 'سونی' },
                { label: 'اپل' },
                { label: 'هواویی' }
            ] },
            { label: 'قطعات کامپیوتر', children: [
                { label: 'Asus' },
                { label: 'Green' },
                { label: 'White' },
                { label: 'Samsung' },
                { label: 'Western Digital' },
                { label: 'MSI' }
            ] }
        ]
    },
    {
        label: 'لوازم خانگی',
        children: []
    },
    {
        label: 'فرهنگ',
        children: []
    },
    {
        label: 'لباس',
        children: []
    },
    {
        label: 'اتومبیل',
        children: []
    }
];

const Megamenu = () => {
    return <ul className="megamenu">
        {categories.map((item, index) => <li  key={index}>
            <span className="label">{item.label}</span>
            <span className="underline" />
            <ul className="sub" style={{ 
                background: `url(${item.img})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'white',
                backgroundPosition: 'bottom left',
                backgroundSize: 350
                }}>
                {item.children.map(item => <li>
                    <span className="label">
                        {item.label}
                    </span>

                    <ul className="sub-2">
                        {(item.children || []).map(item => <li>{item.label}</li>)}
                    </ul>
                </li>)}
            </ul>
        </li>)}
    </ul>
}

export default Megamenu;