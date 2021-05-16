import React from 'react'
import './index.css';


type ButtonProps = {
    disabled?: boolean;
    children: string;
    type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    className?: string
    onClick?: () => void;
}


const Button = ({ children, type, disabled, className, onClick }: ButtonProps) => {
    return <button onClick={onClick} disabled={disabled} type={type} className={`btn ${className ?? ''}`}>{children}</button>
}

export default Button