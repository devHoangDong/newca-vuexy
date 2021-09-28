import React from "react";
import { Col, Row } from "reactstrap";
import TopSearch from '../common/TopSearch';


const DocSearch = () => {
  return (
    <>
      <TopSearch title="Tài liệu hướng dẫn" subtitle="Tìm kiếm tài liệu" />
      <Row>
        <Col sm="12">
          <div className="faq">
            <Row>
              <Col lg="3" md="5" sm="12">
              </Col>
              <Col lg="9" md="7" sm="12">
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default DocSearch
