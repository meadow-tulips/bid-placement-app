import React from 'react';
import './index.css';

type SelectProps = {
    type: string;
    id: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    labelText: string;
    name: string;
    options: {text: string, value: string}[];
    required: boolean
    className?: string;
}

const Select = ({ id, name, value, labelText, options = [], onChange, required = false, className }: SelectProps) => {
    return <div className={`select-wrapper ${className ?? ''}`}>
        {labelText ? <label htmlFor={id}>{labelText}{required ? '*' : ''}</label> : null}
        <select id={id} name={name} onChange={onChange} required={required}>
        {options.map(({ text, value }) => {
                    return <option key={value} value={value}>{text}</option>
        })}
        </select>
    </div>
}

export default Select;