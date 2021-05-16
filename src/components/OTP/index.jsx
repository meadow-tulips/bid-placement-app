import React, { useCallback, useState, useRef, useEffect } from 'react';
import Input from '../Input';
import './index.css';

const OTP = ({ digits, className, handleChange, reset }) => {
    const [otpArr, updateOtp] = useState(new Array(digits ?? 0).fill(''));
    const inputRefs = useRef(new Array(digits ?? 0));

    const onChange = useCallback((e, index) => {
            if(index + 1 < digits && !otpArr[index])
              inputRefs.current[index + 1]?.focus();
        updateOtp([...otpArr.slice(0, index), e.target.value, ...otpArr.slice(index+1, digits)]);
    }, [digits, otpArr])

    useEffect(() => {
        handleChange(otpArr);
    }, [otpArr, handleChange])

    useEffect(() => {
        const { shouldResetOtp, callBack } = reset || {};
        if(shouldResetOtp) {
            updateOtp(new Array(digits ?? 0).fill(''));
            callBack && callBack();
        }
    }, [reset, digits])

    const ui = React.useMemo(() => {
        let result = [];
        for(let i=0;i<digits;i++) {
            result.push(<Input
            className="otp-input"
            ref={ele => inputRefs.current[i] = ele}
            key={`digit-${i+1}`}
            type="text" 
            id={`digit-${i+1}`} 
            maxLength={1}
            onChange={(e) => onChange(e, i)}
            value={otpArr[i]}
            />)
        }
        return result;
    }, [digits, onChange, otpArr]);
    return <div className={className}>{ui}</div>
}

export default OTP;