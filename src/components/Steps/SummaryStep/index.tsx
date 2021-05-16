import React from 'react';
import BidDetails from '../VerifyOtpStep/BidDetails/index';
import JourneyDetails from '../RateNegotiationStep/journeyDetails';
import Button from '../../Button'
import './index.css'

type SummaryStepProps = {
    moveToNextStep: (values?: any, nextStep?: number, reset?: boolean) => void,
    useGetStepData: (index: number) => any;

}

const SummaryStep = ({ useGetStepData, moveToNextStep }: SummaryStepProps) => {
    return <div className="summary-step">
                <JourneyDetails useGetStepData={useGetStepData} moveToNextStep={moveToNextStep} />
                <BidDetails useGetStepData={useGetStepData} />
                <Button onClick={() => {
                    alert('Bid Submitted')
                    moveToNextStep(undefined, 1, true);
                }}type="submit" className="bid-submit">Submit Bid</Button>
            </div>
}

export default SummaryStep;