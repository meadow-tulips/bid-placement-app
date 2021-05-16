import React from 'react';
import './index.css';

type StepHeaderProps = {
    stepNumber: number;
    currentStep: number;
    heading?: string;
}
const StepHeader = ({ stepNumber, currentStep, heading }: StepHeaderProps) => {

    const className = currentStep !== stepNumber ? 'hide' : 'show';

    return <div className={`step-header ${className}`}>
        <h2>{heading}</h2>
    </div>
}



export default StepHeader;