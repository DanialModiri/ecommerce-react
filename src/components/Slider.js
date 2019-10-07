import React from 'react';
import Slick from 'react-slick'
import './Slider.css'

const items = [
    { img: 'https://isipaper.org/storage/photos/2018/03/05/669.jpg', label: 'همایش', title: 'همایش علمیه فجر' },
    {
        img: 'https://www.niksalehi.com/special/wp-content/uploads/sites/51/2019/02/%D9%85%D8%B1%D8%A7%D8%B3%D9%85-%D8%A7%D9%87%D8%AF%D8%A7%DB%8C-%D8%AC%D9%88%D8%A7%DB%8C%D8%B2-%D8%A7%D8%B3%DA%A9%D8%A7%D8%B1-2019-9-600x409.jpg',
        label: 'مراسم',
        color: 'white',
        title: 'مراسم اهدای جوایز اسکار'
    },
    { img: 'https://cdn01.zoomit.ir/ex/Cover/89215c447ce466e635eb3d4ef8347f35_XL.jpg', label: 'ارائه', title: 'شیوه ارائه مطلب' },
    { img: 'http://blog.evace.ir/wp-content/uploads/2017/05/event-marketing.jpg', label: 'رویداد', title: 'رویداد های مهم هفته' }
]

class Slider extends React.Component {


    render() {
        return <div className="card" style={{ display: 'flex', width: 'fit-content' }}>
            <Slick className="slider"
                accessibility={false}
                arrows={false}
                customPaging={(i) => <button >{items[i].label}</button>}
                dotsClass="pagination-slider"
                dots={true}>
                {items.map(item => <div>
                    <div style={{ position: 'relative' }}>
                        <img src={item.img} style={{
                            width: '100%', height: '240px',
                            objectFit: 'cover',
                        }} />
                    <p style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.3)', padding: 8, fontSize: 27, width: 150, bottom: 8, left: 2, color: 'white' }}>
                            {item.title}
                        </p>
                    </div>

                </div>)}
            </Slick>
            <button></button>
        </div>
    }
}

export default Slider;