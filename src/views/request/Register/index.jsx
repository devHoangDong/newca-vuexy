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
    const handleSelectObj = (e) => {
        setObj(e.target.value)
    }
    const handleSelectType = (e) => {
        setType(e.target.value)
    }
    return (
        <div>
            <Breadcrumbs
                breadCrumbTitle="Chứng thư số"
                breadCrumbParent="Yêu cầu dịch vụ"
                breadCrumbActive="Chứng thư số"
            />
            <SelectField handleSelectObj={handleSelectObj} handleSelectType={handleSelectType} />
            { obj === '0' && <UserInfo />}
            { obj === '1' && <OrgInfo1 />}
            {obj === '2' && <EmployInfo1 />}
            {type === '2' && <UserEdit />}
        </div>
    );
};

export default Register;