import React from "react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useHistory } from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    CustomInput,
    Col,
    Input,
    Form, FormFeedback,
    Button,
    Label,
} from "reactstrap";
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb";
import "../../assets/scss/plugins/extensions/react-paginate.scss";
import "../../assets/scss/pages/data-list.scss";

const VerticalForm = () => {
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            title: '',
            detail: '',
        },
        onSubmit: values => {
            history.push('/support')
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Vui lòng không để trống!"),
            detail: Yup.string().required("Vui lòng không để trống!"),
        })
    })
    return (
        <>
            <Breadcrumbs
                breadCrumbTitle="Tạo yêu cầu hỗ trợ"
                breadCrumbParent="Yêu cầu hỗ trợ"
                breadCrumbActive="Tạo yêu cầu hỗ trợ"
            />
            <Form
                onSubmit={e => {
                    e.preventDefault()
                    formik.handleSubmit()
                }}
            >
                <Card>
                    <CardHeader>
                        <Col lg="3" md="12">
                            <FormGroup>
                                <h5 className="text-bold-600">Vấn đề *</h5>
                                <CustomInput type="select" name="select" id="typeservice">
                                    <option>Lỗi</option>
                                    <option>Lỗi</option>
                                </CustomInput>
                            </FormGroup>
                        </Col>
                        <Col lg="3" md="12">
                            <FormGroup>
                                <h5 className="text-bold-600">Dịch vụ *</h5>
                                <CustomInput type="select" name="select" id="typeservice">
                                    <option>Chứng thư số</option>
                                    <option>Chữ ký số</option>
                                </CustomInput>
                            </FormGroup>
                        </Col>
                        <Col lg="3" md="12">
                            <FormGroup>
                                <h5 className="text-bold-600">Nhà cung cấp *</h5>
                                <CustomInput type="select" name="select" id="typeservice">
                                    <option>...</option>
                                    <option>...</option>
                                </CustomInput>
                            </FormGroup>
                        </Col>
                        <Col lg="3" md="12">
                            <FormGroup>
                                <h5 className="text-bold-600">Chi tiết *</h5>
                                <CustomInput type="select" name="select" id="typeservice">
                                    <option>Token</option>
                                    <option>Token</option>
                                </CustomInput>
                            </FormGroup>
                        </Col>
                    </CardHeader>
                    <CardBody>
                        <Col lg="12">
                            <FormGroup>
                                <Label for="title">Tiêu đề</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="title"
                                    onChange={formik.handleChange}
                                    invalid={formik.errors.title && formik.touched.title}
                                    placeholder="Tiêu đề"
                                />
                                <FormFeedback>{formik.errors.title}</FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col lg="12">
                            <FormGroup>
                                <Label for="detail">Nội dung cần hỗ trợ</Label>
                                <Input
                                    type="textarea"
                                    name="detail"
                                    id="detail"
                                    rows="3"
                                    onChange={formik.handleChange}
                                    invalid={formik.errors.detail && formik.touched.detail}
                                    placeholder="Textarea"
                                />
                                <FormFeedback>{formik.errors.detail}</FormFeedback>
                            </FormGroup>
                        </Col>
                        {/* <Col lg="12">
                <FormGroup>
                  <Label for="">Đính kèm</Label>
                  <DropzoneProgrammatically />{" "}
                </FormGroup>
              </Col> */}
                        <Col lg="12">
                            <FormGroup>
                                <Button.Ripple
                                    color="primary"
                                    type="submit"
                                    className="mr-1 mb-1"
                                >
                                    Submit
                                    </Button.Ripple>
                                <Button.Ripple
                                    outline
                                    color="warning"
                                    type="reset"
                                    className="mb-1"
                                >
                                    Reset
                                    </Button.Ripple>
                            </FormGroup>
                        </Col>
                    </CardBody>
                </Card>
            </Form>
        </>
    );
}
export default VerticalForm;
