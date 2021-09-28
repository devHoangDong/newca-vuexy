import React, { useState } from 'react';
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import Result from './Result';
import s from './search.module.scss';

const ServiceSearch = () => {
    const [params, setParams] = useState({})
    const handleSubmit = (value) => {
        setParams(value)
    }
    return (
        <div className={s.searchContainer}>
            <Breadcrumbs
                breadCrumbTitle="Thông tin chi tiết"
                breadCrumbParent="Quản lý dịch vụ"
                breadCrumbParent2="Chứng thư số"
                breadCrumbActive="Thông tin chi tiết"
            />
            {/* <div className={s.searchContainer__title}>
                Tra cứu dịch vụ
            </div> */}
            {/* <SelectInput handleSubmit={handleSubmit} /> */}
            <Result params={params} />
        </div>
    );
};

export default ServiceSearch;