import React from 'react';
import { useState } from 'react'
import EmployInfo from './request/Register/EmployInfo';
import OrgInfo from './request/Register/OrgInfo';
import SelectField from './request/Register/SelectField';
import UserInfo from './request/Register/UserInfo';

const Register = () => {
    const [type, setType] = useState("0")
    const handleSelect = (value) => {
        setType(value)
    }
    return (
        <div>
            <SelectField handleSelect={handleSelect} />
            {type === '0' && <UserInfo />}
            {type === '1' && <OrgInfo />}
            {type === '2' && <EmployInfo />}

        </div>
    );
};

export default Register;