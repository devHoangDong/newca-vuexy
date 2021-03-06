import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Button, Card,
    CardBody,
    Col, CustomInput, FormGroup,
    Label, Row
} from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { handleConfirm } from './Confirm';

const ExpandCTS = () => {
    const history = useHistory()
    return (
        <>
            <Breadcrumbs
                breadCrumbTitle="Gia hạn chứng thư số"
                breadCrumbParent="Quản lý dịch vụ"
                breadCrumbParent2="Chứng thư số"
                breadCrumbActive="Gia hạn"
            />
            <Card>
                <CardBody>
                    <Row className="mb-1">
                        <Col lg="5" md="12" className="mb-1 mb-lg-0">
                            <Row>
                                <Col lg="4" md="12">
                                    <Label for="">Tên giao dịch</Label>
                                </Col>
                                <Col lg="8" md="12" className="font-weight-bold">
                                    Hoàng Ninh
                            </Col>
                            </Row>
                        </Col>
                        <Col lg={{ size: '6', offset: 1 }} md="12">
                            <Row>
                                <Col lg="4" md="12">
                                    <Label for="">Mã chứng thư số</Label>
                                </Col>
                                <Col lg="8" md="12" className="font-weight-bold">
                                    54010163B89501F2EF4EBAA0C717BC20
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col lg="5" md="12">
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
                        <Col lg={{ size: '6', offset: 1 }} md="12">
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
                    <hr />
                    <Row className="mt-2">
                        <Col lg="6" md="12">
                            <Row className="text-left">
                            </Row>
                        </Col>
                        <Col lg="1" md="0"></Col>
                        <Col lg='5' md="12">
                            <Row className="font-medium-3 text-bold-600">
                            </Row>
                            <Row className="mb-2">
                                <Col>
                                    <span>Đơn giá</span><span className="pl-1">800.000<sup>đ</sup></span>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="6" md="12">
                                    <Button.Ripple
                                        color="danger"
                                        type="submit"
                                        className="float-left"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleConfirm(() => history.push('/manage-cts'))
                                        }}
                                    >
                                        Gia hạn
                                </Button.Ripple>
                                </Col>
                                <Col lg="6" md="12" className="pl-0">
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
};

export default ExpandCTS;