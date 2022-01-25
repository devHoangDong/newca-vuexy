import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useHistory } from 'react-router-dom';
import {
    Card,
    CardBody,
    FormGroup,
    CustomInput,
    Col,
    Row,
    Input,
    Form, FormFeedback,
    Button,
    Label,
} from "reactstrap";
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb";
import "../../assets/scss/plugins/extensions/react-paginate.scss";
import "../../assets/scss/pages/data-list.scss";
import support from './../../api/support';
import { handleConfirm } from './../management/cts/Confirm';
import { isUserLoggedIn } from '@utils'
import { alert } from './../common/Confirm';
import SpinnerComponent from './../../components/@vuexy/spinner/Fallback-spinner';
import CaptchaGG from './../search/ServiceSearch/CaptchaGG';

const VerticalForm = () => {
    const history = useHistory();
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [valid, setValid] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: (userData?.name === userData?.phone) ? userData?.name : "",
            subject: '',
            phone: userData?.phone,
            product: 'Hóa đơn điện tử CyberBill',
            tax_id: '',
            description: '',
            email: (userData?.email === userData?.phone) ? userData?.email : "",
        },
        enableReinitialize: true,
        onSubmit: values => {
            handleConfirm(handleAddRequest, values);
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Vui lòng không để trống!"),
            subject: Yup.string().required("Vui lòng không để trống!"),
            phone: Yup.number().required("Vui lòng không để trống!"),
            tax_id: Yup.string().required("Vui lòng không để trống!"),
            product: Yup.string().required("Vui lòng không để trống!"),
            description: Yup.string().required("Vui lòng không để trống!"),
            email: Yup.string().required("Vui lòng không để trống!").email("Email không đúng định dạng!"),
        })
    })
    const handleAddRequest = async (dataSend) => {
        setLoading(true);
        let result = await support.addTicket(dataSend);
        if (result) {
            setLoading(false);
            history.push('/support-complete');
        }
    }
    useEffect(() => {
        if (isUserLoggedIn) {
            const userGoG = JSON.parse(localStorage.getItem('userData'))
            const userToken = JSON.parse(localStorage.getItem('userToken'))
            if (userGoG) { setUserData(userGoG) }
            else {
                setUserData(userToken);
            }
        }
    }, [])
    const onChangeCaptcha = () => {
        setValid(true)
        console.log(valid)
    }
    useEffect(() => {
        setValid(false)
    }, [])
    return (
        <>
            <Breadcrumbs
                breadCrumbsubject="Tạo yêu cầu hỗ trợ"
                // breadCrumbParent="Yêu cầu hỗ trợ"
                breadCrumbActive="Tạo yêu cầu hỗ trợ"
            />
            {loading ? <SpinnerComponent /> :
                <Form
                    onSubmit={e => {
                        e.preventDefault()
                        formik.handleSubmit()
                    }}
                >
                    <Card>
                        <CardBody className="px-50">
                            <Col lg="12">
                                <FormGroup>
                                    <Label for="name">Họ tên <span className="text-danger">*</span></Label>
                                    <Input
                                        type="text"
                                        value={formik.values.name}
                                        name="name"
                                        id="name"
                                        onChange={formik.handleChange}
                                        invalid={formik.errors.name && formik.touched.name}
                                        placeholder="Họ tên"
                                    />
                                    <FormFeedback>{formik.errors.name}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col lg="12">
                                <Row>
                                    <Col lg="6">
                                        <FormGroup>
                                            <Label for="email">Email <span className="text-danger">*</span></Label>
                                            <Input
                                                type="text"
                                                value={formik.values.email}
                                                name="email"
                                                id="email"
                                                onChange={formik.handleChange}
                                                invalid={formik.errors.email && formik.touched.email}
                                                placeholder="Email"
                                            />
                                            <FormFeedback>{formik.errors.email}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <Label for="phone">SĐT <span className="text-danger">*</span></Label>
                                            <Input
                                                type="text"
                                                value={formik.values.phone}
                                                name="phone"
                                                id="phone"
                                                onChange={formik.handleChange}
                                                invalid={formik.errors.phone && formik.touched.phone}
                                                placeholder="Số điện thoại"
                                                disabled={true}
                                            />
                                            <FormFeedback>{formik.errors.phone}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="12">
                                <Row>
                                    <Col lg="6">
                                        <FormGroup>
                                            <Label for="tax_id">Mã số thuế <span className="text-danger">*</span></Label>
                                            <Input
                                                type="text"
                                                name="tax_id"
                                                id="tax_id"
                                                onChange={formik.handleChange}
                                                invalid={formik.errors.tax_id && formik.touched.tax_id}
                                                placeholder="Mã số thuế"
                                            />
                                            <FormFeedback>{formik.errors.tax_id}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        {/* <FormGroup>
                                        <Label for="product">Sản phẩm <span className="text-danger">*</span></Label>
                                        <Input
                                            type="text"
                                            name="product"
                                            id="product"
                                            value={formik.values.product}
                                            onChange={formik.handleChange}
                                            invalid={formik.errors.product && formik.touched.product}
                                            placeholder="Số điện thoại"
                                        />
                                        <FormFeedback>{formik.errors.product}</FormFeedback>
                                    </FormGroup> */}
                                        <FormGroup>
                                            <Label for="product">Sản phẩm <span className="text-danger">*</span></Label>
                                            <CustomInput
                                                type="select"
                                                name="product"
                                                onChange={formik.handleChange}
                                                invalid={formik.errors.product && formik.touched.product}
                                                id="product">
                                                <option>Hóa đơn điện tử CyberBill</option>
                                                <option>Bảo hiểm xã hội điện tử CyberCare</option>
                                                <option>Hợp đồng điện tử CyberSign</option>
                                            </CustomInput>
                                            <FormFeedback>{formik.errors.product}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="12">
                                <FormGroup>
                                    <Label for="subject">Chủ đề <span className="text-danger">*</span></Label>
                                    <Input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        onChange={formik.handleChange}
                                        invalid={formik.errors.subject && formik.touched.subject}
                                        placeholder="Tiêu đề"
                                    />
                                    <FormFeedback>{formik.errors.subject}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col lg="12">
                                <FormGroup>
                                    <Label for="description">Nội dung cần hỗ trợ <span className="text-danger">*</span></Label>
                                    <Input
                                        type="textarea"
                                        name="description"
                                        id="description"
                                        rows="6"
                                        onChange={formik.handleChange}
                                        invalid={formik.errors.description && formik.touched.description}
                                        placeholder="Nhập vấn đề của bạn cần hỗ trợ"
                                    />
                                    <FormFeedback>{formik.errors.description}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col lg="12">
                                <FormGroup>
                                    <CaptchaGG onChange={onChangeCaptcha} />
                                </FormGroup>
                            </Col>
                            <Col lg="12">
                                <Button.Ripple
                                    color="danger"
                                    type="reset"
                                    className="mr-1"
                                >
                                    Nhập lại
                                </Button.Ripple>
                                <Button.Ripple
                                    color="primary"
                                    type="submit"
                                    disabled={!valid}
                                >
                                    Xác nhận
                                </Button.Ripple>
                            </Col>
                        </CardBody>
                    </Card>
                </Form>}
        </>
    );
}
export default VerticalForm;
