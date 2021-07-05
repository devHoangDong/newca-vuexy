import React from 'react';
import {
    Button, Card,
    CardBody,
    Col, CustomInput, FormGroup,
    Input,
    Label, Row
} from "reactstrap";

const OrgInfo1 = () => {

    return (
        <Card>
            <CardBody>
                <Col lg="12" md="12" className="mb-2 font-weight-bold fs-5">
                    Thông tin về tổ chức doanh nghiệp
                </Col>
                <Row className="mb-1 px-4">
                    <Col lg="6" md="12" >
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Tên tổ chức</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                <Input
                                    type="text"
                                    name="orgname"
                                    id="orgname"
                                    placeholder="Tên tổ chức"
                                />
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12" className="pr-0">
                                <Label for="">Mã số ĐKKD/ GPĐT/ QĐTL</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="idcard"
                                    id="idcard"
                                    placeholder="CCCD/CMND/Hộ chiếu"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-4">
                    <Col lg="6" md="12" >
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Ngày cấp</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                <Input required="" type="text" class="form-control" placeholder="Cấp ngày"
                                    onFocus={(e) => (e.currentTarget.type = "date")}
                                    onBlur={(e) => (e.currentTarget.type = "text")} />
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12">
                                <Label for="">Nơi cấp</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="paperlocation"
                                    id="paperlocation"
                                    rows="3"
                                    placeholder="Nơi cấp"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-4">
                    <Col lg="6" md="12" >
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Mã số thuế</Label>
                            </Col>
                            <Col lg="7" md="12" className="font-weight-bold">
                                <Input
                                    type="text"
                                    name="orgtaxcode"
                                    id="ordtaxcode"
                                    rows="3"
                                    placeholder="Mã số thuế"
                                />
                            </Col>
                            <Col lg="1" md="0"></Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12">
                                <Label for="">Ngân sách/BHXH</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="insurance"
                                    id="insurance"
                                    rows="3"
                                    placeholder="Ngân sách/BHXH"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-4">
                    <Col lg='2' md="12">
                        <Label for="">Địa chỉ</Label>
                    </Col>
                    <Col lg='10' md="12" >
                        <Input
                            type="text"
                            name="orgadress"
                            id="orgadress"
                            placeholder="Địa chỉ"
                        />
                    </Col>
                </Row>
                <Row className="mb-2 px-4">
                    <Col lg="6" md="12">
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
                                    placeholder="Email đơn vị"
                                />
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
                                    placeholder="Số điện thoại đơn vị"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Col lg="12" md="12" className="mb-2 font-weight-bold fs-5">
                    Thông tin người đại diện
                </Col>
                <Row className="mb-1 px-4">
                    <Col lg="6" md="12" >
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
                                <Label for="">Chức vụ</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="position"
                                    id="position"
                                    placeholder="Chức vụ"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-2 px-4">
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
                <Row className="mb-4 mt-2 px-4">
                    <Col lg="6" md="12">
                        <Row className="text-left">
                            Chứng thư số dành cho
                            Tổ chức, doanh nghiệp là loại chứng thư số đại diện cho
                            Tổ chức, khi sử dụng trong giao dịch điện tử có giá trị pháp lý tương đương
                            con dấu của Tổ chức. Cặp khóa và chứng thư số này được chứa trong thiết bị PKI
                            chuyên dụng như PKI Token hoặc Smartcard
                        </Row>
                    </Col>
                    <Col lg="1" md="0"></Col>
                    <Col lg='5' md="12" className="pl-4">
                        <Row className="font-medium-3 text-bold-600">
                            Chữ ký số NewCa cho tổ chức 1 năm
                        </Row>
                        <Row className="mb-2">
                            <span>Đơn giá</span><span className="pl-1">1.825.000<sup>đ</sup></span>
                        </Row>
                        <Row>
                            <Col lg="6" md="12" className="pl-0">
                                <Button.Ripple
                                    color="primary"
                                    type="submit"
                                    className="float-left"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Thêm hàng vào giỏ
                                </Button.Ripple>
                            </Col>
                            <Col lg="6" md="12" className="pl-0">
                                <Button.Ripple
                                    color="danger"
                                    type="submit"
                                    className="float-left"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Mua ngay
                                </Button.Ripple>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default OrgInfo1;