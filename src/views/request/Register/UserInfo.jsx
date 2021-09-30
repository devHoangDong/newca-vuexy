import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios"
import { handleConfirm } from '../../management/cts/Confirm';
import { handleDeposit } from './handleDeposit';
import { useHistory } from 'react-router-dom';
import {
    Button, Card,
    CardBody,
    Col, Form, CustomInput, FormGroup, FormFeedback, 
    Input,
    Label, Row
} from "reactstrap";

const UserInfo = () => {
    const history = useHistory()
    const ballance = localStorage.getItem('ballance');
    const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
    const handleBuy = () => {
        history.push('/buy-select');
        const newballance = ballance - 800000;
        localStorage.setItem('ballance',newballance)
    }
    const formik = useFormik({
        initialValues: {
            idnumber: '',
            iddate: '',
            idlocation: '',
            adressresidence: '',
            mobile: '',
          },
          onSubmit: values => {
              if (ballance < 800000) {
                  handleDeposit(() => history.push('/deposit'))
              } else {
                handleConfirm(() => handleBuy())
              }
          },
          validationSchema: Yup.object({
            idnumber: Yup.string().required("Vui lòng không để trống!"),
            iddate: Yup.date().required("Vui lòng không để trống!"),
            idlocation: Yup.string().required("Vui lòng không để trống!"),
            adressresidence: Yup.string().required("Vui lòng không để trống!"),
            mobile: Yup.string().required("Vui lòng không để trống!"),
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
                    }}
                >
                <Row className="mb-1 px-lg-4">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Tên giao dịch</Label>
                            </Col>
                            <Col lg="7" md="12">
                                Hoàng Ninh
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12" className="d-lg-pl-4">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12" className="d-lg-pr-0">
                                <Label for="idnumber">CCCD/CMND/Hộ chiếu</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="idnumber"
                                    id="idnumber"
                                    placeholder="CCCD/CMND/Hộ chiếu"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.idnumber && formik.touched.idnumber}
                                />
                                    <FormFeedback>{formik.errors.idnumber}</FormFeedback>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-lg-4">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="iddate">Ngày cấp</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                <Input type="date" className="form-control" placeholder="Cấp ngày"
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
                <Row className="mb-1 px-lg-4">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Email</Label>
                            </Col>
                            <Col lg="8" md="12">
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
                <Row className="mb-1 px-lg-4">
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
                <Row className="mb-2 px-lg-4 justify-content-between">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="usetime">Thời gian sử dụng</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                <FormGroup className="mb-0">
                                    <CustomInput
                                        type="select"
                                        name="usetime"
                                        id="usetime"
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
                                <Label for="devicetype">Loại thiết bị </Label>
                            </Col>
                            <Col lg="7" md="12">
                                <FormGroup className="mb-0">
                                    <CustomInput
                                        type="select"
                                        name="devicetype"
                                        id="devicetype"
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
                <Row className="px-lg-4">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
                        <Row className="text-left">
                            <Col>
                                Chứng thư số FastCA dành cho CBNV tổ chức là loại được cấp cho những người dùng nội bộ của 1 tổ chức, doanh nghiệp. Khi sử dụng trong giao dịch điện tử có giá trị pháp lý tương đương với chữ ký tay của người đó. Có hiệu lực trong nội bộ tổ chức đó hoặc cả bên ngoài tổ chức nếu quy định pháp luật cho phép sử dụng trong các giao dịch điện tử bên ngoài tổ chức.
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="1" md="0"></Col>
                    <Col lg='5' md="12">
                        <Row className="font-medium-3 text-bold-600">
                            <Col>
                                Chứng thư số FastCa cho CBNV 1 năm
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col>
                                <span>Đơn giá</span><span className="pl-1">800.000<sup>đ</sup></span>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6" md="12">
                                <Button.Ripple
                                    color="primary"
                                    type="submit"
                                    className="float-left mb-1 mb-lg-0"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Thêm hàng vào giỏ
                                </Button.Ripple>
                            </Col>
                            <Col lg="6" md="12">
                                <Button.Ripple
                                    color="danger"
                                    type="submit"
                                    className="float-left mb-1 mb-lg-0"
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