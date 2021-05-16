import React from 'react';
import './index.css';

type inputProps = {
    type: React.InputHTMLAttributes<HTMLInputElement>['type'];
    id: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    labelText?: string;
    name: string;
    required?: boolean;
    className?: string;
    placeHolder?: string;
    pattern?: string
    maxLength?: number
    checked?: boolean
    dataNext?: string
    dataPrevious?: string
    ref?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

const Input = React.forwardRef<HTMLInputElement, inputProps>((props, ref) => {
    const { type, value, onChange, labelText, id, name, required = false, 
        className, placeHolder, pattern, maxLength, checked, dataNext, dataPrevious } = props;
    return (<div className={`input-wrapper ${className ?? ''}`}>
        {labelText ? <label htmlFor={id}>{labelText}{required ? '*' : ''}</label> : null}
        <input
            ref={ref}
            placeholder={placeHolder} 
            name={name} 
            id={id} type={type} 
            value={value} 
            onChange={onChange} 
            required={required}
            pattern={pattern}
            maxLength={maxLength}
            checked={checked}
            data-next={dataNext}
            data-previous={dataPrevious}
        />
    </div>)
    });


export default Input