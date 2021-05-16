import React, { useState, useCallback } from 'react';
import PlaceBidStep, { placeBidFormValues } from '../Steps/PlaceBidStep/index';
import RateNegotiationStep from '../Steps/RateNegotiationStep/index';
import VerifyOtpStep from '../Steps/VerifyOtpStep/index';
import SummaryStep from '../Steps/SummaryStep'
import StepTemplate from './StepTemplate/index';


type StepComponentTypes = {
    numOfSteps?: number;
}

export type stepObject = {
    values: any
}


const StepComponent = ({ numOfSteps = 4 }: StepComponentTypes) => {
    const [currentStep, moveToNextStep] = useState(3);
    const [stepsData, updateSteps] = useState<(stepObject)[]>([]);

    const useGetStepData = (index: number) => {
        return stepsData[index];
    }

    const onMoveToNextStep = useCallback((values? : any) => {
        updateSteps([...stepsData.slice(0, currentStep), {...values}, ...stepsData.slice(currentStep + 1, numOfSteps)])
        moveToNextStep(currentStep + 1);
    }, [currentStep, stepsData, numOfSteps])

    switch(currentStep) {
        case 1:
            return <StepTemplate heading="Place your Bid (1/4 step)" currentStep={currentStep} stepNumber={1}>
                        <PlaceBidStep moveToNextStep={onMoveToNextStep} useGetStepData={useGetStepData}  />
                   </StepTemplate>
        case 2:
            return <StepTemplate heading="Place your Bid (2/4 step)" currentStep={currentStep} stepNumber={2}>
                        <RateNegotiationStep moveToNextStep={onMoveToNextStep} useGetStepData={useGetStepData}  />
                </StepTemplate>
        case 3:
            return <StepTemplate heading="Verify OTP (3/4 step)" currentStep={currentStep} stepNumber={3}><VerifyOtpStep moveToNextStep={onMoveToNextStep} useGetStepData={useGetStepData}   /></StepTemplate>
        case 4:
            return <StepTemplate heading="Summary & Submit Bid (4/4 step)" currentStep={currentStep} stepNumber={3}><SummaryStep moveToNextStep={onMoveToNextStep} useGetStepData={useGetStepData} /></StepTemplate>
        default:
            return null;
    }
}



export default StepComponent