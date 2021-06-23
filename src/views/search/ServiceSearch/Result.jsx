import React from 'react';
import { useState, useEffect } from 'react'
import s from './Result.module.scss'

const Result = ({ params }) => {
    const [user, setUser] = useState({})
    const updateInfo = (value) => {
        setUser(value)
    }
    const getInfo = () => {
        let n = 0;
        let code = '';
        if (params.codeNumber) {
            code = params.codeNumber
            console.log(code)
            n = code.length
            console.log(n)
        }
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "uk0resTyJfVq4uk3Fd57grxsEZb3Nvjy8r29ckZ5HUwm9Ddn4G");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        if (n == 32) {
            fetch(`http://demoapi.fastca.vn/api/search-cert/get-sub-info?serial=${code}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    const { data } = result;
                    let info = data
                    if (info) { updateInfo(info) }
                })
                .catch(error => console.log('error', error));
        } else if (n == 10) {
            fetch(`http://demoapi.fastca.vn/api/search-cert/get-sub-profile?code=${code}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    const { data } = result;
                    let info = data[0]
                    if (info) { updateInfo(info) }
                    console.log(result)
                })
                .catch(error => console.log('error', error));
        } else {
            updateInfo({})
        }
    }
    useEffect(() => {
        getInfo();
    }, [params])
    return (
        <div className={s.resultContainer}>
            <div className={s.resultContainer__title}>
                Chứng thư số
            </div>
            <div className={s.resultContainer__content}>
                <div className={s.resultContainer__content__row}>
                    <div className={s.resultLabel}>
                        Tên thuê bao
                    </div>
                    <div className={s.resultDisplay}>
                        {user.SubjectDN}
                    </div>
                </div>
                <div className={s.resultContainer__content__row}>
                    <div className={s.resultLabel}>
                        Serial chứng thư số
                    </div>
                    <div className={s.resultDisplay}>
                        {user.SerialCTS}
                    </div>
                </div>
                <div className={s.resultContainer__content__row}>
                    <div className={s.resultLabel}>
                        Mã định danh
                    </div>
                    <div className={s.resultDisplay}>
                        {user.UID}
                    </div>
                </div>
                <div className={s.resultContainer__content__row}>
                    <div className={s.resultLabel}>
                        Ngày bắt đầu chứng thư số
                    </div>
                    <div className={s.resultDisplay}>
                        {user.CertificateBegin}
                    </div>
                </div>
                <div className={s.resultContainer__content__row}>
                    <div className={s.resultLabel}>
                        Ngày kết thúc chứng thư số
                    </div>
                    <div className={s.resultDisplay}>
                        {user.CertificateEnd}
                    </div>
                </div>
                <div className={s.resultContainer__content__row}>
                    <div className={s.resultLabel}>
                        Gói đăng ký
                    </div>
                    <div className={s.resultDisplay}>
                        {user.PackageName}
                    </div>
                </div>
                <div className={s.resultContainer__content__row}>
                    <div className={s.resultLabel}>
                        Ngày đăng ký
                    </div>
                    <div className={s.resultDisplay}>
                        {user.DateRequest}
                    </div>
                </div>
                <div className={s.resultContainer__content__row}>
                    <div className={s.resultLabel}>
                        Trạng thái
                    </div>
                    {user.StatusCert == '1' && <div className={s.resultDisplay}>
                        Hoạt động
                        </div>}
                    {user.StatusCert == '0' && (<div className={s.resultDisplay}>
                        Không hoạt động
                    </div>)}
                    {user.StatusCert == '' && <div className={s.resultDisplay}>

                    </div>}

                </div>
            </div>
        </div>
    );
};

export default Result;