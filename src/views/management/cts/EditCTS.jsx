import React from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { handleConfirm } from './Confirm';
import { useFormik } from 'formik';
import * as Yup from "yup";
import {
    Button, Card,
    CardBody,
    Form, FormFeedback,
    Col, CustomInput, FormGroup,
    Input,
    Label, Row
} from "reactstrap";

const ExpandCTS = () => {
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            orgadress: '',
          },
          onSubmit: values => {
            handleConfirm(() => history.push('/manage-cts'))
          },
          validationSchema: Yup.object({
            orgadress: Yup.string().required("Vui lòng không để trống!"),
          })
      })
    return (
        <>
            <Breadcrumbs
                breadCrumbTitle="Chỉnh sửa chứng thư số"
                breadCrumbParent="Quản lý dịch vụ"
                breadCrumbParent2="Chứng thư số"
                breadCrumbActive="Chỉnh sửa"
            />
            <Form 
                onSubmit={e => {
                    e.preventDefault()
                    formik.handleSubmit()
                    console.log(e)
                    }}
                >
            <Card>
                <CardBody>
                    <Row className="mb-1">
                        <Col lg="6" md="12" className="mb-1 mb-lg-0">
                            <Row>
                                <Col lg="4" md="12">
                                    <Label for="">Tên giao dịch</Label>
                                </Col>
                                <Col lg="7" md="12" className="font-weight-bold">
                                    Hoàng Ninh
                            </Col>
                                <Col lg="1" md="0"></Col>
                            </Row>
                        </Col>
                        <Col lg='6' md="12">
                            <Row>
                                <Col lg="1" md="0"></Col>
                                <Col lg="3" md="12">
                                    <Label for="">Mã chứng thư số</Label>
                                </Col>
                                <Col lg="8" md="12" className="font-weight-bold">
                                    54010163B89501F2EF4EBAA0C717BC20
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col lg="6" md="12" className="mb-1 mb-lg-0">
                            <Row>
                                <Col lg="4" md="12">
                                    <Label for="">Loại thiết bị</Label>
                                </Col>
                                <Col lg="7" md="12" className="font-weight-bold">
                                    <FormGroup className="mb-0">
                                        <CustomInput
                                            type="select"
                                            name="requesttype"
                                            id="requesttype"
                                            defaultValue='0'
                                            onChange={""}>
                                            <option value="0">Token</option>
                                            <option value="1">Token</option>
                                            <option value="2">Token</option>
                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                                <Col lg="1" md="0"></Col>
                            </Row>
                        </Col>
                        <Col lg='6' md="12" >
                            <Row>
                                <Col lg="1" md="0"></Col>
                                <Col lg="3" md="12">
                                    <Label for="">Nhà cung cấp</Label>
                                </Col>
                                <Col lg="8" md="12">
                                    <FormGroup className="mb-0">
                                        <CustomInput
                                            type="select"
                                            name="requesttype"
                                            id="requesttype"
                                            defaultValue='0'
                                            onChange={""}>
                                            <option value="0">NewCA</option>
                                            <option value="1">NewCA</option>
                                            <option value="2">NewCA</option>
                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col lg='2' md="12">
                            <Label for="">Địa chỉ trụ sở</Label>
                        </Col>
                        <Col lg='10' md="12" >
                            <Input
                                type="text"
                                name="orgadress"
                                id="orgadress"
                                onChange={formik.handleChange} 
                                invalid={formik.errors.orgadress && formik.touched.orgadress}
                                placeholder="Địa chỉ trụ sở"
                            />
                            <FormFeedback>{formik.errors.orgadress}</FormFeedback>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col lg={{ size: 6, offset: 3 }} md="12" className="d-flex justify-content-center">
                            <Button.Ripple
                                color="danger"
                                onClick={() => history.goBack()}
                            >
                                Hủy
                            </Button.Ripple>
                            <Button.Ripple
                                color="primary"
                                type="submit"
                                className="ml-2"
                            >
                                Xác nhận
                            </Button.Ripple>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            </Form>
        </>
    );
};

export default ExpandCTS;