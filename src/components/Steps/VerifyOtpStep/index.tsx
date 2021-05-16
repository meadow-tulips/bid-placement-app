import React, { useCallback, useState, useEffect } from 'react';
import Button from '../../Button';
import OTP from '../../OTP'
import BidDetails from'./BidDetails';
import './index.css';

type VerifyOtpFormValues = {
    otp: string;
};

type VerifyOtpStepProps = {
    moveToNextStep: (values: VerifyOtpFormValues, nextStep?: number) => void;
    useGetStepData: (index: number) => any;
}

const VerifyOtpStep = ({ moveToNextStep, useGetStepData}: VerifyOtpStepProps) => {
    const [otp, updateOtp] = useState('');
    const [isOtpValid, updateValidation] = useState(true);
    const [shouldResendOtp, updateShouldResendOtp] = useState(false);

    const data = useGetStepData(1);

    const phoneNumber = data?.phoneNumber;

    const handleChange = useCallback((arr: string[]) => {
        const stringifiedOtp = arr?.reduce((acc, item) => acc += (item === '0' ? '0' : item || ''), '');
        updateOtp(stringifiedOtp);
    }, []);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e && e.preventDefault();
        if(otp === '1234') {
            updateValidation(true);
            moveToNextStep({ otp })
        } else {
            updateValidation(false);
        }
    }, [moveToNextStep, otp])

    useEffect(() => {
        if(otp === '1234') {
            updateValidation(true);
            moveToNextStep({ otp })
        }
    }, [otp, moveToNextStep])

    return <form className="verify-otp" onSubmit={handleSubmit}>
              <BidDetails useGetStepData={useGetStepData}  />
                <div className="otp-info">
                    {phoneNumber ? <p style={{fontSize: '14px'}}>We've sent an OTP to your mobile number. Please enter it below to submit your bid <strong>{phoneNumber}</strong>  <span className="edit-icon" onClick={() => moveToNextStep({ otp: ''}, 2)}>Edit</span></p> : null }
                    <OTP className="otp" digits={4} handleChange={handleChange} reset={{ shouldResetOtp: shouldResendOtp, callBack: () => updateShouldResendOtp(false)}} />
                    <Button onClick={() => updateShouldResendOtp(true)} className="resend-otp-btn" type="button">Resend Otp Again</Button>
                </div>
                {!isOtpValid ? <span className="error">Invalid Otp</span> : null}
                <Button className="verify-button" type="submit">Verify Via OTP</Button>
          </form>
}

export default VerifyOtpStep