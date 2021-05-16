import React, { useMemo } from 'react';
import { useFormik } from 'formik';
import Input from '../../../Input'
import Button from '../../../Button'
import './index.css'
import RateNegotiationStep from '../index';

export type PhoneNumberFormValues = {
    phoneNumber: string,
    name: string
    remarks: string
    subscribe: boolean
}

export type PhoneNumberFormTypes = {
    moveToNextStep: (values: (PhoneNumberFormValues & { rate: string, negotiable?: boolean})) => void;
    rate: string;
    negotiable?: boolean;
    useGetStepData: (index: number) => any;
}

const PhoneNumberForm = ({ moveToNextStep, rate, negotiable, useGetStepData }: PhoneNumberFormTypes) => {
    const data = useGetStepData(1);
    const formik = useFormik({
        initialValues: {
          phoneNumber: data?.phoneNumber ?? '',
          name: data?.name ?? '',
          remarks: data?.remarks ?? '',
          subscribe: data?.subscribe ?? true
        },
        onSubmit: values => {
            if(values.name && values.phoneNumber && values.phoneNumber.length === 10)
                moveToNextStep({...values, rate, negotiable });
        },
      });

    const disabled = useMemo(() => {
        if(formik.values.name && formik.values.phoneNumber && formik.values.phoneNumber.length === 10)
            return false;
        return true;
    }, [formik.values])
    return <form className="phone-number-form" onSubmit={formik.handleSubmit}>
        <Input
            className="phone-number"
            id="phoneNumber"
            name="phoneNumber"
            placeHolder="123-456-7895"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            labelText={"Enter your 10 Digits Mobile Number"}
            required
            maxLength={10}
        />
        <div className="subscribe">
            <Input
                id="subscribe"
                name="subscribe"
                type="checkbox"
                onChange={formik.handleChange}
                value={formik.values.subscribe ? '1': '0'}
                checked={formik.values.subscribe}
            />
            <label htmlFor="subscribe">Get updates on WhatsApp</label>
        </div>
         <Input
            className="name"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            labelText={"Enter your name"}
            required
        />
        <Input
            id="remarks"
            name="remarks"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.remarks}
            labelText={"Enter Remarks (optional)"}
        />
        <Button disabled={disabled} type="submit">Verify via OTP</Button>
    </form>
}

export default PhoneNumberForm;