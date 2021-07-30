import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";

import {
    Button, Card,
    CardBody,
    Col, Form, CustomInput, FormGroup, FormFeedback, 
    Input,
    Label, Row
} from "reactstrap";

const UserInfo = () => {
    const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
    const formik = useFormik({
        initialValues: {
            idnumber: '',
            iddate: '',
            idlocation: '',
            adressresidence: '',
            companyName: '',
            roomName: '',
            numberCode: null,
            position: '',
            email: '',
            mobile: '',
            adress: '',
            forCompany: '',
            confirmFile: {
                status: 'no'
            },
            confirmFileB64: '',
            confirmFileName: '',
            companyCheck: false,
          },
          onSubmit: values => {
            console.log(values,'formik')
          },
          validationSchema: Yup.object({
            companyCheck: Yup.boolean(),
            idnumber: Yup.string().required("Vui lòng không để trống!"),
            iddate: Yup.date().required("Vui lòng không để trống!"),
            idlocation: Yup.string().required("Vui lòng không để trống!"),
            adressresidence: Yup.string().required("Vui lòng không để trống!"),
            forCompany: Yup.string().required("Required"),
            companyName: Yup.string()
                .when("companyCheck", {
                is: true,
                then: Yup.string().required("Required")
              }),
            numberCode: Yup.string().nullable(true)
                .when("companyCheck", {
                is: true,
                then: Yup.string().nullable(true).required("Required").min(8,"Not valid!").max(16,"Not valid!")
              }),
            email: Yup.string()
                .when("companyCheck", {
                is: true,
                then: Yup.string().required("Required").email("Invalid email format")
              }),
            mobile: Yup.string().matches(phoneRegExp, 'Số điện thoại không hợp lệ').required("Vui lòng không để trống!"),
            adress: Yup.string()
                .when("companyCheck", {
                is: true,
                then: Yup.string().required("Required")
              }),
            confirmFile: Yup.object().when("companyCheck", {
                is: true,
                then: Yup.object({
                    status: Yup.string().matches(/(done)/, "File require!")
                  })
            })
          })
      })
    return (
        <Card>
            <CardBody>
                <Col lg="12" md="12" className="mb-2 font-weight-bold fs-5">
                    Thông tin người dùng
                </Col>
                <Form 
                onSubmit={e => {
                    e.preventDefault()
                    formik.handleSubmit()
                    console.log(e)
                    }}
                >
                <Row className="mb-1 px-4">
                    <Col lg="6" md="12" >
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
                    <Col lg="6" md="12" className="d-lg-pl-4">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12" className="d-lg-pr-0">
                                <Label for="idcard">CCCD/CMND/Hộ chiếu</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="idcard"
                                    id="idcard"
                                    placeholder="CCCD/CMND/Hộ chiếu"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.idnumber && formik.touched.idnumber}
                                />
                                    <FormFeedback>{formik.errors.idnumber}</FormFeedback>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-4">
                    <Col lg="6" md="12" >
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="iddate">Ngày cấp</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                <Input type="date" class="form-control" placeholder="Cấp ngày"
                                    name="iddate"
                                    id="iddate"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.iddate && formik.touched.iddate}
                                    onFocus={(e) => (e.currentTarget.type = "date")}
                                    onBlur={(e) => (e.currentTarget.type = "text")} />
                                    <FormFeedback>{formik.errors.iddate}</FormFeedback>
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12" className="d-lg-pl-4">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12">
                                <Label for="idlocation">Nơi cấp</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="idlocation"
                                    id="idlocation"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.idlocation && formik.touched.idlocation}
                                    rows="3"
                                    placeholder="Nơi cấp"
                                />
                                <FormFeedback>{formik.errors.idlocation}</FormFeedback>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-4">
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Email</Label>
                            </Col>
                            <Col lg="8" md="12" className="font-weight-bold">
                                ninhhhhh@gmail.com
                            </Col>
                        </Row>
                    </Col>
                    <Col lg='6' md="12" >
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12">
                                <Label for="mobile">Số điện thoại</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="number"
                                    name="mobile"
                                    id="mobile"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.mobile && formik.touched.mobile}
                                    placeholder="Số điện thoại"
                                />
                                <FormFeedback>{formik.errors.mobile}</FormFeedback>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-4">
                    <Col lg='2' md="12">
                        <Label for="adressresidence">Địa chỉ thường trú</Label>
                    </Col>
                    <Col lg='10' md="12" >
                        <Input
                            type="text"
                            name="adressresidence"
                            id="adressresidence"
                            onChange={formik.handleChange} 
                            invalid={formik.errors.adressresidence && formik.touched.adressresidence}
                            placeholder="Địa chỉ thường trú"
                        />
                        <FormFeedback>{formik.errors.adressresidence}</FormFeedback>
                    </Col>
                </Row>
                <Row className="mb-2 px-4 justify-content-between">
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Thời gian sử dụng</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                <FormGroup className="mb-0">
                                    <CustomInput
                                        type="select"
                                        name="requesttype"
                                        id="requesttype"
                                        defaultValue='0'
                                        onChange={""}>
                                        <option value="0">1 năm</option>
                                        <option value="1">1 năm</option>
                                        <option value="2">1 năm</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg='6' md="12">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12">
                                <Label for="">Loại thiết bị </Label>
                            </Col>
                            <Col lg="7" md="12">
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
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row className="mb-4 mt-2 px-4">
                    <Col lg="6" md="12">
                        <Row className="text-left">
                            Chứng thư số FastCA dành cho CBNV tổ chức là loại được cấp cho những người dùng nội bộ của 1 tổ chức, doanh nghiệp. Khi sử dụng trong giao dịch điện tử có giá trị pháp lý tương đương với chữ ký tay của người đó. Có hiệu lực trong nội bộ tổ chức đó hoặc cả bên ngoài tổ chức nếu quy định pháp luật cho phép sử dụng trong các giao dịch điện tử bên ngoài tổ chức.
                        </Row>
                    </Col>
                    <Col lg="1" md="0"></Col>
                    <Col lg='5' md="12">
                        <Row className="font-medium-3 text-bold-600">
                            Chứng thư số FastCa cho CBNV 1 năm
                        </Row>
                        <Row className="mb-2">
                            <span>Đơn giá</span><span className="pl-1">800.000<sup>đ</sup></span>
                        </Row>
                        <Row>
                            <Col lg="6" md="12" className="pl-0">
                                <Button.Ripple
                                    color="primary"
                                    type="submit"
                                    className="float-left mb-2"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Thêm hàng vào giỏ
                                </Button.Ripple>
                            </Col>
                            <Col lg="6" md="12" className="pl-0">
                                <Button.Ripple
                                    color="danger"
                                    type="submit"
                                    className="float-left mb-2"
                                >
                                    Mua ngay
                                </Button.Ripple>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Form>
            </CardBody>
        </Card>
    );
};

export default UserInfo;