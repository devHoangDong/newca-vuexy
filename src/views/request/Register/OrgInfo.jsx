import React from 'react';
import { Input, Select } from 'antd';
import { Form, Button, Checkbox, Row, Col } from 'antd';
import s from './OrgInfo.module.scss'

const OrgInfo = () => {
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
            span: 6,
        },
        wrapperCol: {
            span: 18,
        },
    };
    const tailLayout3 = {
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
                <div className={s.userContainer__form__title}>
                    Thông tin doanh nghiệp tổ chức
                </div>
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
                    <Form.Item
                        {...tailLayout}
                        label="Mã số giấy DKKD/Giấy phép đầu tư/Quyết định thành lập *"
                        name="username"
                        className={s.floatLabel1}
                    >
                        <Input id="username" />
                    </Form.Item>
                    <Row >
                        <Col span={12}>
                            <Form.Item
                                {...tailLayout3}
                                className={s.floatLabel1}
                                label="Cấp ngày *"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                {...tailLayout2}
                                label="Tổ chức cấp *"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Mã số thuế/Ngân sách/BHXH *"
                        name="username"
                        className={s.floatLabel1}
                    >
                        <Input id="username" />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ trụ sở *"
                        name="username"
                        className={s.floatLabel1}
                    >
                        <Input id="username" />
                    </Form.Item>
                    <Row >
                        <Col span={10} offset={4}>
                            <Form.Item
                                {...tailLayout2}
                                className={s.floatLabel1}
                                label="Tỉnh/thành *"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                        <Col span={10}>
                            <Form.Item
                                {...tailLayout2}
                                label="Quận/huyện *"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={10} offset={4}>
                            <Form.Item
                                {...tailLayout2}
                                className={s.floatLabel1}
                                label="Phường/xã *"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={12}>
                            <Form.Item
                                {...tailLayout3}
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
                    <div className={s.userContainer__form__managerInfo}>
                        Thông tin người quản lý
                    </div>
                    <Row >
                        <Col span={12}>
                            <Form.Item
                                {...tailLayout3}
                                className={s.floatLabel1}
                                label="Tên người quản lý *"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                {...tailLayout2}
                                label="Chức vụ *"
                                name="codeNumber"
                            >
                                <Input id="codeNumber" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={12}>
                            <Form.Item
                                {...tailLayout3}
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
                                {...tailLayout3}
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
                                {...tailLayout3}
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

export default OrgInfo;