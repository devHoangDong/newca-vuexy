import React from "react"
import { Card, CardBody, FormGroup, Input, Row, Col } from "reactstrap"
import { Search } from "react-feather"
import TopSearch from '../common/TopSearch';


const VideoSearch = () => {
    return (
      <>
      <TopSearch title="Video hướng dẫn" subtitle="Tìm kiếm video" />
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
export default VideoSearch
