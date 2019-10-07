import React from 'react';
import './TextInput.css'

const TextInput = ({ input, label, style, meta: { error, touched } }) => {

    return <div className="textfield" style={style}>
        <label>{label}</label>
        <div style={{ position: 'relative' }}>
            <input className="input" {...input} style={{ border: touched && error ? '1px solid rgb(175, 0, 0)':undefined }} />
            <span className="error-icon fa fa-close" style={{ opacity: touched && error ?  1 : 0 }} />
            <span className="underline" style={{ backgroundColor: touched && error ? 'rgb(175, 0, 0)' : undefined }}></span>
        </div>

        

        <span className="error" style={{ display: touched && error ? 'block' : 'none' }}>
            {error}
        </span>
    </div>
}

export default TextInput;