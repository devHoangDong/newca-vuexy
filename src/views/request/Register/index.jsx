import React from 'react';
import { useState } from 'react'
import EmployInfo from './EmployInfo';
import OrgInfo from './OrgInfo';
import SelectField from './SelectField';
import UserInfo from './UserInfo';

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