import { useState } from 'react';
import './InputField.css';

const InputField = (props) => {
const { type = 'text' } = props;
console.log(type);
const changeController = (e) => { props.setValue(e.target.value); }

    return <div className={`inputField inputField-${props.type}`}>
        <label>{props.data}</label>
        <input
            placeholder={props.placeholder}
            required={props.required}
            value={props.value}
            onChange={changeController}
            type = {props.type}
        />
    </div>
}

export default InputField;