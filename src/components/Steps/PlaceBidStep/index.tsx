import React from 'react';
import { useFormik } from 'formik';
import Input from '../../Input'
import Select from '../../Select'
import Button from '../../Button';
import './index.css';

export type placeBidFormValues = {
    sourceLocation: string;
    numOfTravellers: number;
    destination: string;
    carType: string;
}

export type PlaceBidStepsProps = {
  moveToNextStep: (values: placeBidFormValues) => void;
  useGetStepData: (index: number) => any;
}

const PlaceBidSteps = ({ moveToNextStep, useGetStepData }: PlaceBidStepsProps) => {
  const options = [{ text: 'HatchBack', value: 'hatchback'}, { text: 'Sedan', value: 'sedan'}, { text: 'SUV', value: 'suv'}]

    const formik = useFormik({
        initialValues: {
          sourceLocation: '',
          numOfTravellers: 0,
          destination: '',
          carType: options[0].value
        },
        onSubmit: values => {
          if(values.carType && values.destination && values.sourceLocation)
            moveToNextStep(values)
        },
      });
    const disabled = (formik.values.carType && formik.values.destination && formik.values.sourceLocation) ? false: true;
    return <form className="place-bid-form" onSubmit={formik.handleSubmit}>
      <div>
      <Input
        id="source-location"
        name="sourceLocation"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.sourceLocation}
        labelText={"Source Location"}
        required
      />
      <Input
        id="destination"
        name="destination"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.destination}
        labelText={"Destination"}
        required
      />
      </div>
      <Select
        id="car-type"
        name="carType"
        type="dropdown"
        onChange={formik.handleChange}
        value={formik.values.carType}
        labelText={"Enter car type"}
        required
        options={options}
      />
      <Input
        className="num-of-travellers"
        id="num-of-travellers"
        name="numOfTravellers"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.numOfTravellers.toString()}
        labelText={"Number of Travellers"}
      />
      <Button disabled={disabled} type="submit">Enter bid details</Button>
    </form>
}

export default PlaceBidSteps;