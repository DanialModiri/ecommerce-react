import React from 'react'
import './Header.css'
import Megamenu from './Megamenu';

const Header = () => {


    return <header>
        {/*<div className="right">
            <a href="#" className="home">
                <span className="fa fa-home"></span>
            </a>
        </div>
        <div className="left">
            <a href={'#'}>
                ثبت آگهی
            </a>
            <a href="#">
                قوانین
            </a>
            <a href={'#'}>
                درباره
            </a>

        </div>*/}

        <div style={{ borderBottom: '2px solid rgb(0, 105, 204)'  }}>
            <div className="container" style={{ margin: '0 auto', display: 'flex' }}>
                <div className="title" style={{ flexGrow: 1, margin: 'auto 0' }}>
                    <h3>
                        فروشگاه اینترنتی
                    </h3>
                </div>
                <div className="search">
                    <input placeholder="جستجو، نام محصول، دسته" />
                    <button>
                        <span className="fa fa-search" />
                    </button>
                </div>
            </div>


        </div>
        <div style={{ backgroundColor: '#eee' }}>
            <div className="container" style={{ margin: '0 auto', display: 'flex' }}>
                <Megamenu />
            </div>
        </div>


    </header>
}

export default Header;