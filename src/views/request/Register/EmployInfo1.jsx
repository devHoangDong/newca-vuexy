import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import {
    Button, Card,
    CardBody,
    Col, CustomInput, Form, FormGroup,
    FormFeedback,
    Input,
    Label, Row
} from "reactstrap";

const EmployInfo = () => {
    const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
    const formik = useFormik({
        initialValues: {
            idcard: '',
            idbusiness: '',
            dateprovide: '',
            locationprovide: '',
            orgname: '',
            orgadress: '',
            department: '',
            taxcode: '',
            codeinsurance: '',
            adressresidence: '',
            orgemail: '',
            orgphone: '',
            position: '',
          },
          onSubmit: values => {
            console.log(values,'formik')
          },
          validationSchema: Yup.object({
            idcard: Yup.string().required("Vui lòng không để trống!"),
            idbusiness: Yup.string().required("Vui lòng không để trống!"),
            dateprovide: Yup.date().required("Vui lòng không để trống!"),
            taxcode: Yup.string().required("Vui lòng không để trống!"),
            orgname: Yup.string().required("Vui lòng không để trống!"),
            orgadress: Yup.string().required("Vui lòng không để trống!"),
            department: Yup.string().required("Vui lòng không để trống!"),
            codeinsurance: Yup.string().required("Vui lòng không để trống!"),
            locationprovide: Yup.string().required("Vui lòng không để trống!"),
            adressresidence: Yup.string().required("Vui lòng không để trống!"),
            orgemail: Yup.string().required("Vui lòng không để trống!").email("Email không hợp lệ!"),
            position: Yup.string().required("Vui lòng không để trống!"),
            orgphone: Yup.string().matches(phoneRegExp, 'Số điện thoại không hợp lệ').required("Vui lòng không để trống!"),
          })
      })
    return (
        <Form 
                onSubmit={e => {
                    e.preventDefault()
                    formik.handleSubmit()
                    console.log(e)
                    }}
                >
        <Card>
            <CardBody>
                <Col lg="12" md="12" className="mb-2 font-weight-bold fs-5">
                    Thông tin người dùng
                </Col>
                <Row className="mb-1 px-lg-4">
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
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.idcard && formik.touched.idcard}
                                    placeholder="CCCD/CMND/Hộ chiếu"
                                />
                                <FormFeedback>{formik.errors.idcard}</FormFeedback>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-lg-4">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Ngày cấp</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                <Input type="date" className="form-control" placeholder="Ngày cấp"
                                    name="dateprovide"
                                    id="dateprovide"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.dateprovide && formik.touched.dateprovide}
                                    onFocus={(e) => (e.currentTarget.type = "date")}
                                    onBlur={(e) => (e.currentTarget.type = "text")} />
                                    <FormFeedback>{formik.errors.dateprovide}</FormFeedback>
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12" className="d-lg-pl-4">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12">
                                <Label for="locationprovide">Nơi cấp</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="locationprovide"
                                    id="locationprovide"
                                    rows="3"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.locationprovide && formik.touched.locationprovide}
                                    placeholder="Nơi cấp"
                                />
                                <FormFeedback>{formik.errors.dateprovide}</FormFeedback>
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
                            <Col lg="7" md="12" className="font-weight-bold">
                                ninhhhhh@gmail.com
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg='6' md="12" >
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12">
                                <Label for="orgphone">Số điện thoại</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="orgphone"
                                    id="orgphone"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.orgphone && formik.touched.orgphone}
                                    placeholder="Số điện thoại"
                                />
                                <FormFeedback>{formik.errors.orgphone}</FormFeedback>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-lg-4">
                    <Col lg='2' md="12">
                        <Label for="">Địa chỉ thường trú</Label>
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
                <Row className="mb-1 px-lg-4">
                    <Col lg='2' md="12">
                        <Label for="">Tên tổ chức</Label>
                    </Col>
                    <Col lg='10' md="12" >
                        <Input
                            type="text"
                            name="orgname"
                            id="orgname"
                            onChange={formik.handleChange} 
                            invalid={formik.errors.orgname && formik.touched.orgname}
                            placeholder="Tên tổ chức"
                        />
                        <FormFeedback>{formik.errors.orgname}</FormFeedback>
                    </Col>
                </Row>
                <Row className="mb-1 px-lg-4">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="position">Chức danh</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                <Input
                                    type="text"
                                    name="position"
                                    id="position"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.position && formik.touched.position}
                                    placeholder="Chức danh"
                                />
                                <FormFeedback>{formik.errors.position}</FormFeedback>
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg='6' md="12" >
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12">
                                <Label for="">Phòng ban</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="department"
                                    id="department"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.department && formik.touched.department}
                                    placeholder="Phòng ban"
                                />
                                <FormFeedback>{formik.errors.department}</FormFeedback>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-lg-4">
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Mã số thuế</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                <Input
                                    type="text"
                                    name="taxcode"
                                    id="taxcode"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.taxcode && formik.touched.taxcode}
                                    placeholder="Mã số thuế"
                                />
                                <FormFeedback>{formik.errors.taxcode}</FormFeedback>
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg='6' md="12" >
                    </Col>
                </Row>
                <Row className="mb-1 px-lg-4">
                    <Col lg='2' md="12">
                        <Label for="orgadress">Địa chỉ trụ sở</Label>
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
                    </Col>
                </Row>
                <Row className="mb-2 px-lg-4 justify-content-between">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
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
            </CardBody>
        </Card>
        </Form>
    );
};

export default EmployInfo;