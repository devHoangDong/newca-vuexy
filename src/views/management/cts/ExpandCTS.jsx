import React from 'react';
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';
import { handleConfirm } from './Confirm';
import {
    Button, Card,
    CardBody,
    Col, CustomInput, FormGroup,
    Input,
    Label, Row
} from "reactstrap";

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
                    <Row className="mb-1 mt-1 px-4">
                        <Col lg="5" md="12">
                            <Row>
                                <Col lg="4" md="12">
                                    <Label for="">Tên giao dịch</Label>
                                </Col>
                                <Col lg="8" md="12">
                                    Hoàng Ninh
                            </Col>
                            </Row>
                        </Col>
                        <Col lg={{ size: '6', offset: 1 }} md="12">
                            <Row>
                                <Col lg="4" md="12">
                                    <Label for="">Mã chứng thư số</Label>
                                </Col>
                                <Col lg="8" md="12">
                                    54010163B89501F2EF4EBAA0C717BC20
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mb-2 px-4">
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
                    <Row className="mt-2 px-4">
                        <Col lg="6" md="12">
                            <Row className="text-left">
                            </Row>
                        </Col>
                        <Col lg="1" md="0"></Col>
                        <Col lg='5' md="12">
                            <Row className="font-medium-3 text-bold-600">
                            </Row>
                            <Row className="mb-2">
                                <span>Đơn giá</span><span className="pl-1">800.000<sup>đ</sup></span>
                            </Row>
                            <Row>
                                <Col lg="6" md="12" className="pl-0">
                                    <Button.Ripple
                                        color="danger"
                                        type="submit"
                                        className="float-left mb-2"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleConfirm(e,() => history.push('/manage-cts'))
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