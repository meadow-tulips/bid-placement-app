import React, { useState, useMemo } from 'react';
import { useFormik } from 'formik';
import Input from '../../Input'
import Button from '../../Button';
import PhoneNumberForm, { PhoneNumberFormValues } from './PhoneNumberForm'
import JourneyDetails from './journeyDetails';
import './index.css';

export type RateNegotiationFormValues = {
  rate: string,
  negotiable?: boolean
}

export type RateNegotiationStepProps = {
  moveToNextStep: (values: RateNegotiationFormValues & PhoneNumberFormValues) => void;
  useGetStepData: (index: number) => any;
}

const RateNegotiationStep = ({ moveToNextStep, useGetStepData }: RateNegotiationStepProps) => {
    const [showPhoneNumberForm, updateShowPhoneNumberForm] = useState(false)
    const formik = useFormik({
        initialValues: {
          rate: '',
          negotiable: false,
        },
        onSubmit: values => {
          if(values?.rate)
            updateShowPhoneNumberForm(!showPhoneNumberForm);
        },
      });

      const disabled = useMemo(() => {
        if(formik.values.rate) {
          return false;
        }
        return true;
    }, [formik.values])

    return <div className="rate-negotiation-step">
          <JourneyDetails useGetStepData={useGetStepData} />
          <form onSubmit={formik.handleSubmit}>
              <Input
                className="rate"
                id="rate"
                name="rate"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.rate}
                labelText=""
                required
                placeHolder="0"
              />
              <div className="negotiable">
                <input
                  id="negotiable"
                  name="negotiable"
                  type="checkbox" 
                  value={formik.values.negotiable ? '1': '0'} 
                  onChange={formik.handleChange}
                />
                <label htmlFor="negotiable">Rate Negotiable</label>
              </div>
              {!showPhoneNumberForm ? <Button disabled={disabled} type="submit">Next</Button> : null}
          </form>
          {showPhoneNumberForm ? <PhoneNumberForm moveToNextStep={moveToNextStep} rate={formik.values.rate} negotiable={formik.values.negotiable} useGetStepData={useGetStepData} /> : null} 
        </div>
}

export default RateNegotiationStep;