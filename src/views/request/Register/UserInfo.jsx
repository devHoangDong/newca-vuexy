import React from 'react';
import {
    Button, Card,
    CardBody,
    Col, CustomInput, FormGroup,
    Input,
    Label, Row
} from "reactstrap";

const UserInfo = () => {

    return (
        <Card>
            <CardBody>
                <Col lg="12" md="12" className="mb-2 font-weight-bold fs-5">
                    Thông tin người dùng
                </Col>
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
                                <Label for="">CCCD/CMND/Hộ chiếu</Label>
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
                    <Col lg="6" md="12" className="d-lg-pl-4">
                        <Row>
                            <Col lg="1" md="0"></Col>
                            <Col lg="4" md="12">
                                <Label for="">Nơi cấp</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="idlocation"
                                    id="idlocation"
                                    rows="3"
                                    placeholder="Nơi cấp"
                                />
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
                                <Label for="">Số điện thoại</Label>
                            </Col>
                            <Col lg="7" md="12">
                                <Input
                                    type="text"
                                    name="mobile"
                                    id="mobile"
                                    placeholder="Số điện thoại"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1 px-4">
                    <Col lg='2' md="12">
                        <Label for="">Địa chỉ thường trú</Label>
                    </Col>
                    <Col lg='10' md="12" >
                        <Input
                            type="text"
                            name="adressresidence"
                            id="adressresidence"
                            placeholder="Địa chỉ thường trú"
                        />
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

export default UserInfo;