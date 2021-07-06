import React from "react"
import { Row, Col } from "reactstrap"
import SalesCard from "./SalesCard"
import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
import AvgSession from "../../ui-elements/cards/analytics/AvgSessions"
import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker"
import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders"
import SalesStat from "../../ui-elements/cards/analytics/Sales"
import ActivityTimeline from "./ActivityTimeline"
import DispatchedOrders from "./DispatchedOrders"
import "../../../assets/scss/pages/dashboard-analytics.scss"
import QuaterlySales from '../../ui-elements/cards/statistics/QuaterlySales';
import RevenueGenerated from '../../ui-elements/cards/statistics/RevenueGenerated';
import ProfileCards from '../../ui-elements/cards/basic/ProfileCards';


class AnalyticsDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="3" md="6" sm="12">
            <QuaterlySales />
          </Col>
          <Col lg="3" md="6" sm="12">
            <RevenueGenerated />
          </Col>
          <Col lg="3" md="6" sm="12">
            <SuberscribersGained />
          </Col>
          <Col lg="3" md="6" sm="12">
          <ProfileCards />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AnalyticsDashboard
