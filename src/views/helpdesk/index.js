import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import '../../assets/scss/EditPassword.scss';
import MyTitle from '../account/content/Title.jsx';
import { setLoading as setLoadingAction } from '../../redux/actions/myactions/userAction';
import { useDispatch } from 'react-redux';
import userApi from "../../api/userApi";
const HelpDesk = () => {
    const dispatch = useDispatch()
    const onFinish = (values) => {
        updateUser(values)
        console.log('Success:', values);
    };
    const updateUser = async (params) => {
        dispatch(setLoadingAction(true))
        setTimeout(() => {
            dispatch(setLoadingAction(false))
        }, 3000);
        const response = await userApi.addTicket(params)
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    return (
        <div className="editPassword">
            <div className="editPassword__container">
                <div className="editPassword__title">
                    <MyTitle title="Gửi yêu cầu hỗ trợ" />
                </div>
                <div className="editForm">
                    <Form  {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label={"Tiêu đề"}
                            name="subject"
                            rules={[{ required: true, message: 'Tiêu đề không được để trống!' }]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item
                            label={"Nội dung cần hỗ trợ"}
                            name="description"
                            rules={[{ required: true, message: 'Nội dung không được để trống!' }]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default HelpDesk;
