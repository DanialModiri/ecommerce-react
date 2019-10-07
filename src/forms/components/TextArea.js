import React from 'react';
import './TextInput.css'

const TextArea = ({ input, label, meta: { error, touched } }) => {

    return <div className="textfield">
        <label>{label}</label>
        <textarea className="input" rows={5} {...input} />
    </div>
}

export default TextArea;