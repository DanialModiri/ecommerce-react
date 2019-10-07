import React from 'react';
import { Field, reduxForm } from 'redux-form'
import MultiFileInput from './components/MultiFileInput';
import TextInput from './components/TextInput';
import TextArea from './components/TextArea';
import './AddForm.css'


const required = (value, allValues, props) => {
    console.log(props)    
    return value ? undefined : 'این فیلد مورد نیاز است';
}

const AdForm = () => {
    return <div className='card' style={{ padding: 24, boxSizing: 'border-box' }}>
        <h3 style={{ marginBottom: 16 }}>
            مشخصات کلی
        </h3>
        <Field validate={required} component={TextInput} name="fullname" label="نام و نام خانوادگی" />
        <Field validate={required} component={TextInput} name='title' label={'عنوان'} />
        <Field validate={required} component={MultiFileInput} name="images"></Field>
        <Field validate={required} component={TextInput} name="number" label="شماره تماس" />
        <Field validate={required} component={TextArea} name="des" label="توضیحات محصول" />
        <button className="btn-insert">
            ثبت آگهی
        </button>
    </div>
}


export default reduxForm({
    form: 'ad'
})(AdForm);