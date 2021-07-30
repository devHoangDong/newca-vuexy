import React from "react"
import { Card, CardBody, FormGroup, Input, Row, Col } from "reactstrap"
import { Search } from "react-feather"
import TableContent from "./TableContent"
import FaqQuestions from "./FaqQuestions"
import TopSearch from '../common/TopSearch';
class QuestionSearch extends React.Component {
  state = {
    value: ""
  }
  onChange = event => {
    let searchText = event.target.value.toLowerCase()
    this.setState({
      value: searchText
    })
  }
  render() {
    return (
      <>
      <TopSearch title="Trung tâm trợ giúp" subtitle="Tìm kiếm trợ giúp" />
      <Row>
        <Col sm="12">
          <div className="faq">
            <Row>
              <Col lg="3" md="5" sm="12">
                <TableContent />
              </Col>
              <Col lg="9" md="7" sm="12">
                <FaqQuestions value={this.state.value} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      </>
    )
  }
}
export default QuestionSearch
