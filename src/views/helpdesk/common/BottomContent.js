import React from "react";
import { Info, Mail, Phone } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody, Col, Row, Button } from "reactstrap";
import "../../../assets/scss/pages/faq.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

const BottomContent = () => {
  const history = useHistory();
  return (
    <>
      <Row className="pt-4">
        <Col lg={{ size: 8, offset: 2 }} md="12">
          <small className="text-center font-weight-bold ">
            <h3>Liên hệ với NewCA</h3>
          </small>
        </Col>
        <Col lg={{ size: 6, offset: 3 }} md="12" className="text-center">
          Bạn đang gặp khó khăn cần được hỗ trợ hay cần đóng góp ý kiến? Hãy
          liên hệ với NewCA qua bộ phận chăm sóc khách hàng. Chúng tôi sẽ giải
          quyết vấn đề của bạn nhanh nhất có thể
        </Col>
      </Row>
      <Row className="pt-2">
        <Col md="4" sm="6" lg="4" className="search-content pb-2">
          <Card className="h-100">
            <CardBody className="text-center p-0 pt-2">
              <Info className="mb-1" size={20} />
              <h4 className="mb-1">Gửi yêu cầu hỗ trợ</h4>
              <Button.Ripple
                onClick={() => history.push("/support-create")}
                color="primary"
              >
                Gửi yêu cầu hỗ trợ
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" sm="6" lg="4" className="search-content pb-2">
          <Card className="h-100">
            <CardBody className="text-center p-0 pt-2">
              <Link to="/pages/knowledge-base/category">
                <Phone className="mb-1" size={20} />
                <h4 className="mb-1">Hotline CSKH 24/7</h4>
                <small className="text-dark font-weight-bold">
                  0936.208.068
                </small>
              </Link>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" sm="6" lg="4" className="search-content pb-2">
          <Card className="h-100">
            <CardBody className="text-center p-0 pt-2">
              <Link to="/pages/knowledge-base/category">
                <Mail className="mb-1" size={20} />
                <h4 className="mb-1">Email hỗ trợ</h4>
                <small className="text-dark font-weight-bold">
                  support@newca.vn
                </small>
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BottomContent;
