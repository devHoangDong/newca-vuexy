import React from 'react';
import { Input, Select } from 'antd';
import { Form, Button, Checkbox, Row, Col } from 'antd';

import s from './UserInfo.module.scss'

const UserInfo = () => {
    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 20,
        },
    };
    const tailLayout = {
        labelCol: {
            span: 12,
        },
        wrapperCol: {
            span: 12,
        },
    };
    const tailLayout2 = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    return (
        <div className={s.userContainer}>
            <div className={s.userContainer__title}>
                Thông tin người dùng
            </div>
            <div className={s.userContainer__form}>
                <Form
                    {...layout}
                >
                    <Form.Item
                        label="Tên giao dịch *"
                        name="username"
                        className={s.floatLabel1}
                    >
                        <Input id="username" />
                    </Form.Item>
                    <Row >
                        <Col span={8}>
                            <Form.Item
                                {...tailLayout}
                                className={s.floatLabel1}
                                label="CMND/CCCD/Hộ chiếu *"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                {...tailLayout2}
                                label="Cấp ngày *"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                {...tailLayout2}
                                label="Nơi cấp *"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Địa chỉ thường trú *"
                        name="username"
                        className={s.floatLabel1}>
                        <Input id="username" />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ giao dịch *"
                        name="username"
                        className={s.floatLabel1}>
                        <Input id="username" />
                    </Form.Item>
                    <Row >
                        <Col span={12}>
                            <Form.Item
                                {...tailLayout2}
                                className={s.floatLabel1}
                                label="Email *"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                {...tailLayout2}
                                label="Số điện thoại *"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={12}>
                            <Form.Item
                                {...tailLayout2}
                                className={s.floatLabel1}
                                label="Thời gian sử dụng"
                                name="codeNumber"
                            >
                                <Select defaultValue="CTS" onChange={handleChange}>
                                    <Option value="CTS">1 năm</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                {...tailLayout2}
                                label="Khác (nếu chọn)"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={12}>
                            <Form.Item
                                {...tailLayout2}
                                className={s.floatLabel1}
                                label="Loại thiết bị"
                                name="codeNumber"
                            >
                                <Select defaultValue="CTS" onChange={handleChange}>
                                    <Option value="CTS">Token</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Col span={20} offset={4}>
                        <Form.Item
                            {...tailLayout2}
                            name="codeNumber"
                        >
                            <Button type="primary" htmlType="submit" style={{ float: "left" }}>
                                Ký điện tử
                            </Button>
                        </Form.Item>
                    </Col>
                    <Row justify="center">
                        <Col span={3}>
                            <Form.Item
                                {...tailLayout2}
                                name="codeNumber"
                            >
                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                    Hủy
                            </Button>
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item
                                {...tailLayout2}
                                name="codeNumber"
                            >
                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                    Xác nhận
                            </Button>
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </div>
        </div>
    );
};

export default UserInfo;