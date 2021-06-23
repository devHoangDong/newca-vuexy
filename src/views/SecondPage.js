import React, { useState, useEffect } from 'react';
import SelectInput from './search/ServiceSearch/SelectInput';
import Result from './search/ServiceSearch/Result';
import s from './search/ServiceSearch/search.module.scss'

const ServiceSearch = () => {
    const [params, setParams] = useState({})
    const handleSubmit = (value) => {
        setParams(value)
    }
    return (
        <div className={s.searchContainer}>
            <div className={s.searchContainer__title}>
                Tra cứu dịch vụ
            </div>
            <SelectInput handleSubmit={handleSubmit} />
            <Result params={params} />
        </div>
    );
};

export default ServiceSearch;