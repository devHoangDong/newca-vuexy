import { Input, Select } from 'antd';
import React from 'react';
import s from './SelectField.module.scss';
import { Form, Button, Checkbox } from 'antd';

const SelectField = ({ handleSelect }) => {
    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    const layout = {
        wrapperCol: {
            span: 24,
        },
    };
    const tailLayout = {
        wrapperCol: {
            span: 24,
        },
    };
    return (
        <div className={s.InputContainer}>
            <Form
                {...layout}
                layout="inline"
            >
                <Form.Item
                    style={{ width: 'calc(100%/3)', marginRight: 0, paddingRight: "4rem" }}
                    name="requestType">
                    <Select defaultValue="1" onChange={handleChange}>
                        <Option value="1">Yêu cầu đăng kí sử dụng chứng thư số</Option>
                        <Option value="2">Yêu cầu gia hạn chứng thư số</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    style={{ width: 'calc(100%/3)', marginRight: 0 }}
                    name="typeUser">
                    <Select defaultValue="0" onChange={handleSelect}>
                        <Option value="0">Khách hàng cá nhân</Option>
                        <Option value="1">Khách hàng tổ chức</Option>
                        <Option value="2">Khách hàng cá nhân thuộc tổ chức</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    style={{ width: 'calc(100%/3)', marginRight: 0 }}
                    name="codeNumber"
                    justify="space-between"
                >
                    <Button type="primary" htmlType="submit" style={{ float: "right" }}>
                        Xác nhận
                    </Button>
                </Form.Item>

            </Form>
            {/* <div className={s.InputContainer__typeService}>
                <label for="typeService">Loại dịch vụ</label>
                <Select defaultValue="CTS" style={{ width: "30%" }} onChange={handleChange}>
                    <Option value="CTS">Chứng thư số</Option>
                </Select>
            </div>
            <div className={s.InputContainer__codeNumber}>
                <label for="codeNumber">Mã định danh hoặc serial Chứng thư số <span>*</span></label>
                <Input id="codeNumber" />
            </div> */}
        </div>
    );
};

export default SelectField;