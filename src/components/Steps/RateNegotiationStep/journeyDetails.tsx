import React from 'react';
import './index.css';

type JourneyDetailsProps = {
    data: {
        sourceLocation: string;
        destination: string;
        numOfTravellers?: number;
        carType: string;
    }
    useGetStepData: (index: number) => any;
    moveToNextStep: (values: any, x?: number) => void;
}

const JourneyDetails = ({ useGetStepData, moveToNextStep }: Pick<JourneyDetailsProps, 'useGetStepData' | 'moveToNextStep'>) => {
    const data = useGetStepData(0);
    const { sourceLocation, destination, carType, numOfTravellers } = data || {};
    return <div style={{ borderBottom: '1px solid lightblue', padding: '2.5rem 0'}}><h6 className="journey-details">
                Journey Details  <span className="edit-icon" onClick={() => moveToNextStep(undefined, 1)}>Edit</span>
          </h6>
          <div className="details">
          {(sourceLocation || destination) && <span>{sourceLocation} / {destination}</span>}
          {carType && <span>{numOfTravellers} {numOfTravellers && numOfTravellers > 1 ? 'Persons' : numOfTravellers === 1 ? 'Person' : ''} , {carType}</span>}
      </div>
      </div>
}

export default JourneyDetails;