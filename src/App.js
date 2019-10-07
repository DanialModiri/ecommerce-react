import React from 'react';
import './App.css';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Sidemenu from './components/SideMenu';
import Products from './components/Products'
import { connect } from 'react-redux'
import Sort from './components/Sort';

function App({ dispatch, query }) {


  console.log('QUERY', query)

  return (
    <React.Fragment>
      <Header></Header>

      <div className="container">


        <div className="products-view">
          <Sidemenu />
          <div className="products-container" style={{ flexGrow: 1, width: '75%' }}>
            <Breadcrumb items={[
              { label: 'محصولات', url: '/' },
              { label: 'کالای دیجیتال', url: '#' },
              { label: 'گوشی موبایل', url: '#' }
            ]} />
            <Sort />
            <Products />
          </div>

        </div>

      </div>

      <div style={{ marginTop: 88 }}></div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => state.phones;

export default connect(mapStateToProps)(App);
