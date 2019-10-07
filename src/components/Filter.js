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

    toggleOpen = () => {
        this.setState({ open: !this.state.open })
    }

    onCheckedBoxesChange = (item) => (e) => {
        const { name = '', onChange } = this.props;
        if (!onChange)
            return;
        let value = this.props.value || [];
        if(!Array.isArray(value))
            value = [value];
        const newValue = [...value];
        if (e.target.checked)
            newValue.push(item);
        else
        {
            const index = value.findIndex(el => el === item);
            newValue.splice(index, 1);
        }
        onChange({ name, value: newValue });
    }

    render() {
        const { name, style, label = '', items = [], } = this.props;
        let value = this.props.value || [];
        if (!Array.isArray(value))
            value = [value];
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
                        <Checkbox
                            checked={value.includes(item)}
                            id={name + index + 1}
                            onChange={this.onCheckedBoxesChange(item, index)}
                            
                        />
                    </li>
                }
                )}
            </ul>
        </div>
    }
}

export default Filter;