import React from 'react'
import './MultiFileInput.css'
export default ({ input, label }) => {


    return <div className="multi-file-input">
        <p>
            تصویر آگهی
        </p>
        <div className="preview">
            {(input.value || []).map(file => <img src={file.src} />)}
        </div>

        <label htmlFor={input.name + '_file'}>
            <span className="cam-icon fa fa-camera" />
            <span className="text">
                افزودن تصویر
            </span>
            <input
                id={input.name + '_file'}
                type="file" onChange={(e) => {
                    if (e.target.files[0]) {
                        console.log(e.target.files[0])
                        input.onChange((input.value || []).concat({ src: e.target.files[0].originalfilename }));
                    }
                }} />
        </label>


    </div>
}