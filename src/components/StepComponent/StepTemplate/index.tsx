import React from 'react';
import StepHeader from '../StepHeader';
import StepContent from '../StepContent';

type StepTemplateType = {
    heading?: string;
    stepNumber: number;
    currentStep: number;
    children?: React.ReactNode;
}
const StepTemplate = (props: StepTemplateType) => {
    return <>
        <StepHeader {...props} />
        <StepContent {...props} />
    </>
}

export default StepTemplate;