import React from 'react';
import './index.css';

type BidDetailsProps = {
    useGetStepData: (index: number) => any;
}

const BidDetails = ({ useGetStepData }: BidDetailsProps) => {
    const data = useGetStepData(1);
    const { phoneNumber, name, rate, negotiable } = data || {};
    return <>
            <h6>Bid Details</h6>
            <div className="bid-details">
                <div className="user-info">
                    <span>{phoneNumber}</span>
                    <span>{name}</span>
                    <span>Call me Immediately to finalize</span>
                </div>
                <div className="price">
                    <span>{rate}</span>
                    <span>{!negotiable ? 'Fixed Price' : 'Negotiable'}</span>
                </div>
            </div>
    </>
}

export default BidDetails;