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

const RestoreCTS = () => {
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            codeusb: '',
            subreason: '',
          },
          onSubmit: values => {
            handleConfirm(() => history.push('/manage-cts'))
          },
          validationSchema: Yup.object({
            codeusb: Yup.string().required("Vui lòng không để trống!"),
            subreason: Yup.string().required("Vui lòng không để trống!"),
          })
      })
    return (
        <>
            <Breadcrumbs
                breadCrumbTitle="Thu hồi chứng thư số"
                breadCrumbParent="Quản lý dịch vụ"
                breadCrumbParent2="Chứng thư số"
                breadCrumbActive="Thu hồi"
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
                    <Row className="mb-1 px-4">
                        <Col lg="6" md="12">
                            <Row>
                                <Col lg="4" md="12">
                                    <Label for="">Tên giao dịch</Label>
                                </Col>
                                <Col lg="7" md="12" className="font-weight-bold">
                                    Công ty TNHH Dr.Marie
                            </Col>
                                <Col lg="1" md="0"></Col>
                            </Row>
                        </Col>
                        <Col lg='6' md="12" >
                            <Row>
                                <Col lg="1" md="0"></Col>
                                <Col lg="3" md="12">
                                    <Label for="">Mã chứng thư số</Label>
                                </Col>
                                <Col lg="8" md="12">
                                    54010163B89501F2EF4EBAA0C717BC20
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mb-1 px-4">
                        <Col lg="6" md="12">
                            <Row>
                                <Col lg="4" md="12">
                                    <Label for="">Loại thiết bị</Label>
                                </Col>
                                <Col lg="7" md="12" className="font-weight-bold">
                                    Token
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
                                    NewCA
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mb-1 px-4">
                        <Col lg="6" md="12">
                            <Row>
                                <Col lg="4" md="12">
                                    <Label for="">Mã USB token</Label>
                                </Col>
                                <Col lg="7" md="12" className="font-weight-bold">
                                    <Input
                                        type="text"
                                        name="codeusb"
                                        id="codeusb"
                                        onChange={formik.handleChange} 
                                        invalid={formik.errors.codeusb && formik.touched.codeusb}
                                        placeholder="Mã USB token"
                                    />
                                    <FormFeedback>{formik.errors.codeusb}</FormFeedback>
                                </Col>
                                <Col lg="1" md="0"></Col>
                            </Row>
                        </Col>
                        <Col lg='6' md="12" >
                        </Col>
                    </Row>
                    <Row className="mb-1 px-4">
                        <Col lg="6" md="12">
                            <Row>
                                <Col lg="4" md="12">
                                    <Label for="reason">Lý do</Label>
                                </Col>
                                <Col lg="7" md="12" className="font-weight-bold">
                                    <FormGroup className="mb-0">
                                        <CustomInput
                                            type="select"
                                            name="requesttype"
                                            id="reason"
                                            defaultValue='0'
                                            onChange={""}>
                                            <option value="0">Mất Token</option>
                                            <option value="1">Mất Token</option>
                                            <option value="2">Mất Token</option>
                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                                <Col lg="1" md="0"></Col>
                            </Row>
                        </Col>
                        <Col lg='6' md="12" >
                        </Col>
                    </Row>
                    <Row className="mb-1 px-4">
                        <Col lg="2" md="12">
                            <Label for="">Lý do</Label>
                        </Col>
                        <Col lg='10' md="12" >
                            <Input
                                type="textarea"
                                name="subreason"
                                id="subreason"
                                onChange={formik.handleChange} 
                                invalid={formik.errors.subreason && formik.touched.subreason}
                                row="3"
                            />
                            <FormFeedback>{formik.errors.subreason}</FormFeedback>
                        </Col>
                    </Row>
                    <Row className="mt-2 px-4">
                        <Col lg={{ size: 6, offset: 3 }} md="12" className="d-flex justify-content-center">
                            <Button.Ripple
                                color="primary"
                                onClick={(e) => e.preventDefault()}
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

export default RestoreCTS;