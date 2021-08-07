import React, { useState } from 'react';
import { Briefcase, DollarSign } from 'react-feather';
import { Card, Col, Row, Button } from 'reactstrap';
import StatisticsCards from '../../@core/components/statistics-card/index';
import { CardBody } from 'reactstrap';

const DrawalMoney = () => {
 
  return (
    <>
      <Row className="d-flex mt-2 justify-content-center">
        <Col lg={{size:4,offset:0}}>
        <StatisticsCards
              hideChart
              iconBg="info"
              icon={<DollarSign className="primary" size={22} />}
              stat="999 USD"
              statTitle="Tiền hoa hồng"
            />
        </Col>
        <Col lg={{size:4,offset:0}}>
        <StatisticsCards
              hideChart
              iconBg="success"
              icon={<Briefcase className="success" size={22} />}
              stat="999 USD"
              statTitle="Số dư hiện tại"
            />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Button className="text-center"
        color="primary" 
        >
        Gửi yêu cầu rút tiền
        </Button>
      </Row>
      </>
  )
}

export default DrawalMoney
