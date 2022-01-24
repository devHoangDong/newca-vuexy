import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";


const CaptchaGG = ({ onChange }) => {

    return (
        <div>
            <ReCAPTCHA
                // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                sitekey="6LcOaCMbAAAAAF56RiONJEHhgZR0x6ngkenCQfMz"
                onChange={onChange}
            />
        </div>
    );
};

export default CaptchaGG;
