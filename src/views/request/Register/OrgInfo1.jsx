import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import {
    Button, Card,
    CardBody,
    Col, CustomInput, Form, FormGroup, FormFeedback,
    Input,
    Label, Row
} from "reactstrap";

const OrgInfo1 = () => {
    const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
    const formik = useFormik({
        initialValues: {
            orgname: '',
            idbusiness: '',
            dateprovide: '',
            locationprovide: '',
            orgtaxcode: '',
            codeinsurance: '',
            orgadress: '',
            orgemail: '',
            orgphone: '',
            position: '',
          },
          onSubmit: values => {
            console.log(values,'formik')
          },
          validationSchema: Yup.object({
            companyCheck: Yup.boolean(),
            orgname: Yup.string().required("Vui lòng không để trống!"),
            idbusiness: Yup.string().required("Vui lòng không để trống!"),
            dateprovide: Yup.date().required("Vui lòng không để trống!"),
            orgtaxcode: Yup.string().required("Vui lòng không để trống!"),
            codeinsurance: Yup.string().required("Vui lòng không để trống!"),
            locationprovide: Yup.string().required("Vui lòng không để trống!"),
            orgadress: Yup.string().required("Vui lòng không để trống!"),
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
                    Thông tin về tổ chức doanh nghiệp
                </Col>
                <Row className="mb-1 px-lg-4">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="orgname">Tên tổ chức</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
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
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12" className="pr-0">
                                <Label for="idbusiness">Mã số ĐKKD/ GPĐT/ QĐTL</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="idbusiness"
                                    id="idbusiness"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.idbusiness && formik.touched.idbusiness}
                                    placeholder="CCCD/CMND/Hộ chiếu"
                                />
                                <FormFeedback>{formik.errors.idbusiness}</FormFeedback>
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
                                <Input type="date" className="form-control" placeholder="Cấp ngày"
                                    name="dateprovide"
                                    id="dateprovide"
                                    onFocus={(e) => (e.currentTarget.type = "date")}
                                    onBlur={(e) => (e.currentTarget.type = "text")}
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.dateprovide && formik.touched.dateprovide}
                                    />
                                    <FormFeedback>{formik.errors.dateprovide}</FormFeedback>
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
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
                                <FormFeedback>{formik.errors.locationprovide}</FormFeedback>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-lg-4">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="orgtaxcode">Mã số thuế</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                <Input
                                    type="text"
                                    name="orgtaxcode"
                                    id="orgtaxcode"
                                    rows="3"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.orgtaxcode && formik.touched.orgtaxcode}
                                    placeholder="Mã số thuế"
                                />
                                <FormFeedback>{formik.errors.orgtaxcode}</FormFeedback>
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12">
                                <Label for="codeinsurance">Ngân sách/BHXH</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="codeinsurance"
                                    id="codeinsurance"
                                    rows="3"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.codeinsurance && formik.touched.codeinsurance}
                                    placeholder="Ngân sách/BHXH"
                                />
                                <FormFeedback>{formik.errors.codeinsurance}</FormFeedback>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-lg-4">
                    <Col lg='2' md="12">
                        <Label for="orgadress">Địa chỉ</Label>
                    </Col>
                    <Col lg='10' md="12" >
                        <Input
                            type="text"
                            name="orgadress"
                            id="orgadress"
                            onChange={formik.handleChange} 
                            invalid={formik.errors.orgadress && formik.touched.orgadress}
                            placeholder="Địa chỉ"
                        />
                        <FormFeedback>{formik.errors.orgadress}</FormFeedback>
                    </Col>
                </Row>
                <Row className="mb-2 px-lg-4">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Email đơn vị</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                <Input
                                    type="text"
                                    name="orgemail"
                                    id="orgemail"
                                    rows="3"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.orgemail && formik.touched.orgemail}
                                    placeholder="Email đơn vị"
                                />
                                <FormFeedback>{formik.errors.orgemail}</FormFeedback>
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg='6' md="12">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12">
                                <Label for="">Số điện thoại đơn vị</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="orgphone"
                                    id="orgphone"
                                    rows="3"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.orgphone && formik.touched.orgphone}
                                    placeholder="Số điện thoại đơn vị"
                                />
                                <FormFeedback>{formik.errors.orgphone}</FormFeedback>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Col lg="12" md="12" className="mb-2 font-weight-bold fs-5">
                    Thông tin người đại diện
                </Col>
                <Row className="mb-1 px-lg-4">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Tên người quản lý</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                Hoàng Ninh
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12" className="pr-0">
                                <Label for="position">Chức vụ</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="position"
                                    id="position"
                                    onChange={formik.handleChange} 
                                    invalid={formik.errors.position && formik.touched.position}
                                    placeholder="Chức vụ"
                                />
                                <FormFeedback>{formik.errors.position}</FormFeedback>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-2 px-lg-4">
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
                    <Col lg='6' md="12" >
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
                <Row className="mt-2 px-lg-4">
                    <Col lg="6" md="12" className="mb-1 mb-lg-0">
                        <Row className="text-left">
                            <Col>
                                Chứng thư số dành cho
                                Tổ chức, doanh nghiệp là loại chứng thư số đại diện cho
                                Tổ chức, khi sử dụng trong giao dịch điện tử có giá trị pháp lý tương đương
                                con dấu của Tổ chức. Cặp khóa và chứng thư số này được chứa trong thiết bị PKI
                                chuyên dụng như PKI Token hoặc Smartcard
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="1" md="0"></Col>
                    <Col lg='5' md="12">
                        <Row className="font-medium-3 text-bold-600">
                            <Col>
                                Chữ ký số NewCa cho tổ chức 1 năm
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col>
                                <span>Đơn giá</span><span className="pl-1">1.825.000<sup>đ</sup></span>
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
                                    className="float-left mb-lg-0"
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

export default OrgInfo1;