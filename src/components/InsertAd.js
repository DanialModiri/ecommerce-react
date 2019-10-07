import React, { Component } from 'react';
import Category from './Category';
import './InsertAd.css'
import AdForm from '../forms/AdForm';

class InsertAdd extends Component {
    state = {
        category: null
    }

    render() {
        return (<div className="container">
            <h2 style={{ padding: 8 }}>
                ثبت آگهی
            </h2>
            <div className="row">
                <div className="col-6">
                    <Category categories={[
                        {
                            children: [
                                { label: 'سدان' },
                                { label: 'کوپه' },
                                { label: 'سنگین' }
                            ], label: 'اتومبیل'
                        },
                        {
                            children: [
                                { label: 'موبایل' },
                                { label: 'لوازم جانبی موبایل' },
                                { label: 'لپ تاپ' },
                                { label: 'لوازم جانبی لپ تاپ' }
                            ], label: 'کالای دیجیتال'
                        },
                        {
                            children: [
                                { label: 'آپارتمان' },
                                { label: 'ویلایی' },
                                { label: 'زمین' },
                                { label: 'مغازه' },
                                { label: 'زمین کشاورزی' }
                            ], label: 'ملک'
                        },
                        {
                            children: [
                                { label: 'کتاب' },
                                { label: 'فیلم' },
                                { label: 'آلات موسیقی' }
                            ], label: 'فرهنگی'
                        }
                    ]} />
                </div>

                <div className="col-6">
                    <AdForm />
                </div>

            </div>

        </div>);
    }
}

export default InsertAdd;