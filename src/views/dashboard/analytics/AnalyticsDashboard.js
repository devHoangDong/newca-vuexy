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


let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff"

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
