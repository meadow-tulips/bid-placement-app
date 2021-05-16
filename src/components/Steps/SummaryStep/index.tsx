import React from 'react';
import BidDetails from '../VerifyOtpStep/BidDetails/index';
import JourneyDetails from '../RateNegotiationStep/journeyDetails';
import Button from '../../Button'
import './index.css'

type SummaryStepProps = {
    moveToNextStep: () => void,
    useGetStepData: (index: number) => any;

}

const SummaryStep = ({ useGetStepData, moveToNextStep }: SummaryStepProps) => {
    return <div className="summary-step">
                <JourneyDetails useGetStepData={useGetStepData} />
                <BidDetails useGetStepData={useGetStepData} />
                <Button type="submit" className="bid-submit">Submit Bid</Button>
            </div>
}

export default SummaryStep;