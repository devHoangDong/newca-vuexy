import React, { useEffect, useState } from 'react';
import {
    Card,
    CardBody,
    FormGroup,
    Input,
    Label
} from "reactstrap";

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
        if (n === 32) {
            fetch(`http://demoapi.fastca.vn/api/search-cert/get-sub-info?serial=${code}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    const { data } = result;
                    let info = data
                    if (info) { updateInfo(info) }
                })
                .catch(error => console.log('error', error));
        } else if (n === 10) {
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
        <Card>
            <CardBody>
                <FormGroup>
                    <Label for="disabledInput">Tên thuê bao</Label>
                    <Input type="text" id="disabledInput" readOnly value="E=duongha6298@gmail.com, OID.0.9.2342.19200300.100.1.1=MNS:0000111133306, CN=CTY TNHH SINH CHỨNG THƯ SỐ CẤP BÙ 3, S=Sơn La, C=VN" />
                </FormGroup>
                <FormGroup>
                    <Label for="disabledInput">Serial chứng thư số</Label>
                    <Input type="text" id="readonlyInput" readOnly value="54010163B89501F2EF4EBAA0C717BC20" />
                </FormGroup>
                <FormGroup>
                    <Label for="disabledInput">Mã định danh</Label>
                    <Input type="text" id="disabledInput" readOnly value="0000111133306" />
                </FormGroup>
                <FormGroup>
                    <Label for="disabledInput">Ngày bắt đầu chứng thư số</Label>
                    <Input type="text" id="disabledInput" readOnly value="21-05-2021" />
                </FormGroup>
                <FormGroup>
                    <Label for="disabledInput">Ngày kết thúc chứng thư số</Label>
                    <Input type="text" id="disabledInput" readOnly value="21-05-2022" />
                </FormGroup>
                <FormGroup>
                    <Label for="disabledInput">Gói đăng ký</Label>
                    <Input type="text" id="disabledInput" readOnly value="OS New 1 Year" />
                </FormGroup>
                <FormGroup>
                    <Label for="disabledInput">Ngày đăng ký</Label>
                    <Input type="text" id="disabledInput" readOnly value="21-05-2021" />
                </FormGroup>
                <FormGroup>
                    <Label for="disabledInput">Trạng thái</Label>
                    <Input type="text" id="disabledInput" readOnly value="Đang hoạt động" />
                </FormGroup>
            </CardBody>
        </Card>
    );
};

export default Result;