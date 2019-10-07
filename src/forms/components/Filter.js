import React from 'react';
import './Filter.css'
import classNames from 'classnames'

const Checkbox = ({ onChange, checked, name, id, style = {} }) => {

    return <div className="checkbox" style={style}>

        <input id={id} checked={checked} onChange={onChange} type="checkbox" />
        <label htmlFor={id}>
            <span className="fa fa-check" />
        </label>
    </div>
}

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        open: true
    }

    componentWillReceiveProps(newProps){
        if(newProps.input.value)
            this.setState({ open: false });
    }

    toggleOpen = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        const { input, style, label = '', name = '', items = [], onChange } = this.props;

        if(input.value && typeof input.value === 'string')
            input.onChange([input.value]);
        return <div className="card filter" style={style}>
            <div className="title" onClick={this.toggleOpen}>
                <label>
                    {label}
                </label>
                <span className="fa fa-angle-down"></span>

            </div>
            <ul className={classNames({ collapse: this.state.open })}>
                {items.map((item, index) => {
                    return <li key={index + 1}>
                        <span>
                            {item}
                        </span>
                        <Checkbox id={input.name + index + 1}
                            checked={(input.value || []).includes(item)}
                            onChange={(e) => {
                                const isInValue = (Array.isArray(input.value) ? input.value : []).findIndex(v => v === item);
                                if (!e.target.checked && isInValue !== -1) {
                                    const copy = [...input.value];
                                    copy.splice(isInValue, 1)
                                    input.onChange(copy);
                                }
                                else if (isInValue === -1)
                                    input.onChange((input.value || []).concat(item));
                            }} />
                    </li>
                }
                )}
            </ul>
        </div>
    }
}

export default Filter;