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
}

const JourneyDetails = ({ useGetStepData }: Pick<JourneyDetailsProps, 'useGetStepData'>) => {
    const data = useGetStepData(0);
    const { sourceLocation, destination, carType, numOfTravellers } = data || {};
    return <div style={{ borderBottom: '1px solid lightblue', padding: '2.5rem 0'}}><h6 className="journey-details">
                Journey Details  <span style={{ marginLeft: 'auto', color: 'blue'}}>Edit</span>
          </h6>
          <div className="details">
          {(sourceLocation || destination) && <span>{sourceLocation} / {destination}</span>}
          {carType && <span>{numOfTravellers} {numOfTravellers && numOfTravellers > 1 ? 'Persons' : numOfTravellers === 1 ? 'Person' : ''} , {carType}</span>}
      </div>
      </div>
}

export default JourneyDetails;