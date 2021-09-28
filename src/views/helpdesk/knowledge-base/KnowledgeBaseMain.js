import React from "react"
import { Col, Row } from "reactstrap"
import KnowledgeCards from "./KnowledgeCards"

class KnowledgeBaseMain extends React.Component {
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
      <Row>
        <Col sm="12">
          <KnowledgeCards value={this.state.value} />
        </Col>
      </Row>
    )
  }
}
export default KnowledgeBaseMain
