import React from 'react';

type StepContentProps = {
    children?: React.ReactNode;
}
const StepContent = ({ children }: StepContentProps) => {

    return <div>
        {children ?? null}
    </div>
}



export default StepContent;