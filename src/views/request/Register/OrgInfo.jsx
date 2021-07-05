import React from 'react';
import {
    Button, Card,
    CardBody,
    Col, CustomInput, FormGroup,
    Input,
    Label, Row
} from "reactstrap";

const OrgInfo = () => {

    return (
        <Card>
            <CardBody>
                <Col lg="12" md="12" className="mb-2 font-weight-bold fs-5">
                    Thông tin người dùng
                </Col>
                <Row className="mb-1">
                    <Col lg="12" md="12" className="font-weight-bold">
                        <Label for="">Thông tin doanh nghiệp/tổ chức</Label>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col lg="2" md="12">
                        <Label for="">Tên giao dịch *</Label>
                    </Col>
                    <Col lg="10" md="12">
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Tên giao dịch"
                        />
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col lg="4" md="12">
                        <Label for="">Mã số giấy DKKD/Giấy phép đầu tư/Quyết định thành lập *</Label>
                    </Col>
                    <Col lg="8" md="12">
                        <Input
                            type="text"
                            name="paper"
                            id="paper"
                            placeholder=""
                        />
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Cấp ngày *</Label>
                            </Col>
                            <Col lg="8" md="12">
                                <Input
                                    required=""
                                    type="text"
                                    name="date"
                                    id="date"
                                    class="form-control"
                                    placeholder="Cấp ngày"
                                    onFocus={(e) => (e.currentTarget.type = "date")}
                                    onBlur={(e) => (e.currentTarget.type = "text")} />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Tổ chức cấp *</Label>
                            </Col>
                            <Col lg="8" md="12">
                                <Input
                                    type="text"
                                    name="org"
                                    id="org"
                                    placeholder="Tổ chức cấp"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col lg="2" md="12">
                        <Label for="">Mã số thuế/Ngân sách/BHXH *</Label>
                    </Col>
                    <Col lg="10" md="12">
                        <Input
                            type="text"
                            name="taxcode"
                            id="taxcode"
                            placeholder="Mã số thuế/Ngân sách/BHXH"
                        />
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col lg="2" md="12">
                        <Label for="">Địa chỉ trụ sở</Label>
                    </Col>
                    <Col lg="10" md="12">
                        <Input
                            type="text"
                            name="adress1"
                            id="adress1"
                            placeholder="Địa chỉ trụ sở"
                        />
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col lg={{ size: '10', offset: 2 }} md="12">
                        <Row>
                            <Col lg="6" md="12">
                                <Row>
                                    <Col lg="3" md="12">
                                        <Label for="">Tỉnh/thành</Label>
                                    </Col>
                                    <Col lg="9" md="12">
                                        <FormGroup className="mb-0">
                                            <CustomInput
                                                type="select"
                                                name="province"
                                                id="province"
                                                defaultValue='0'
                                                onChange={""}>
                                                <option value="0">Hà Nội</option>
                                                <option value="1">TP HCM</option>
                                                <option value="2">Đà Nẵng</option>
                                            </CustomInput>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="6" md="12">
                                <Row>
                                    <Col lg="3" md="12">
                                        <Label for="">Quận huyện</Label>
                                    </Col>
                                    <Col lg="9" md="12">
                                        <FormGroup className="mb-0">
                                            <CustomInput
                                                type="select"
                                                name="district"
                                                id="district"
                                                defaultValue='0'
                                                onChange={""}>
                                                <option value="0">Ba Đình</option>
                                                <option value="1">Hai Bà Trưng</option>
                                                <option value="2">Tây Hồ</option>
                                                <option value="2">Hoàng Mai</option>
                                                <option value="2">Hà Đông</option>
                                                <option value="2">Phú Xuyên</option>
                                            </CustomInput>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col lg={{ size: '10', offset: 2 }} md="12">
                        <Row>
                            <Col lg="6" md="12">
                                <Row>
                                    <Col lg="3" md="12">
                                        <Label for="">Phường/xã</Label>
                                    </Col>
                                    <Col lg="9" md="12">
                                        <FormGroup className="mb-0">
                                            <CustomInput
                                                type="select"
                                                name="ward"
                                                id="ward"
                                                defaultValue='0'
                                                onChange={""}>
                                                <option value="0">Cống Vị</option>
                                                <option value="1">Đội Cấn</option>
                                                <option value="2">Vĩnh Phúc</option>
                                                <option value="2">Ngọc Khánh</option>
                                                <option value="2">Kim Mã</option>
                                            </CustomInput>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Email *</Label>
                            </Col>
                            <Col lg="8" md="12">
                                <Input required="" type="text" class="form-control" placeholder="Email"
                                    onFocus={(e) => (e.currentTarget.type = "date")}
                                    onBlur={(e) => (e.currentTarget.type = "text")} />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Tổ chức cấp *</Label>
                            </Col>
                            <Col lg="8" md="12">
                                <Input
                                    type="text"
                                    name="adress1"
                                    id="adress1"
                                    placeholder="Tổ chức cấp"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Email *</Label>
                            </Col>
                            <Col lg="8" md="12">
                                <Input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Số điện thoại *</Label>
                            </Col>
                            <Col lg="8" md="12">
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
                <Row className="mb-1">
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Thời gian sử dụng </Label>
                            </Col>
                            <Col lg="8" md="12">
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
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Khác (nếu chọn)</Label>
                            </Col>
                            <Col lg="8" md="12">
                                <Input
                                    type="text"
                                    name="mobile"
                                    id="mobile"
                                    placeholder=""
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col lg="6" md="12">
                        <Row>
                            <Col lg="4" md="12">
                                <Label for="">Loại thiết bị </Label>
                            </Col>
                            <Col lg="8" md="12">
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
                <Row className="mb-5">
                    <Col lg="2" md="12">
                    </Col>
                    <Col lg="10" md="12">
                        <Button.Ripple
                            color="primary"
                            type="submit"
                            className="float-left"
                            onClick={(e) => e.preventDefault()}
                        >
                            Ký điện tử
                    </Button.Ripple>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col lg="6" md="12">
                        <Button.Ripple
                            color="primary"
                            type="submit"
                            className="float-right"
                            onClick={(e) => e.preventDefault()}
                        >
                            Hủy
                    </Button.Ripple>
                    </Col>
                    <Col lg="6" md="12">
                        <Button.Ripple
                            color="primary"
                            type="submit"
                            className="float-left"
                            onClick={(e) => e.preventDefault()}
                        >
                            Xác nhận
                    </Button.Ripple>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default OrgInfo;