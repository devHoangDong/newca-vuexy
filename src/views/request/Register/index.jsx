import React from 'react';
import { useState } from 'react'
import EmployInfo1 from './EmployInfo1';
import OrgInfo1 from './OrgInfo1';
import SelectField from './SelectField';
import UserInfo from './UserInfo';
import UserEdit from '../Edit/UserEdit';
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"


const Register = () => {
    const [obj, setObj] = useState("0")
    const [type, setType] = useState("0")
    const handleSelect = (obj,type) => {
        setObj(obj)
        setType(type)
    }
    return (
        <div>
            <Breadcrumbs
                breadCrumbTitle="Chứng thư số"
                breadCrumbParent="Yêu cầu dịch vụ"
                breadCrumbActive="Chứng thư số"
            />
            <SelectField handleSelect={handleSelect} />
            { obj === '0' && <UserInfo />}
            { obj === '1' && <OrgInfo1 />}
            {obj === '2' && <EmployInfo1 />}
            {/* {type === '2' && <UserEdit />} */}
        </div>
    );
};

export default Register;