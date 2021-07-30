import React, {useState} from "react"
import { Card, CardBody, FormGroup, Input, Row, Col } from "reactstrap"
import { Search } from "react-feather"


const TopSearch = (props) => {
  const [value,setValue] = useState("")
  const onChange = event => {
    let searchText = event.target.value.toLowerCase()
    setValue(searchText)
  }
    return (
      <Row>
        <Col sm="12">
          <Card className="faq-bg">
            <CardBody className="p-sm-4 p-2">
              <h1 className="text-white">{props.title}</h1>
              <p className="mb-2 text-white">
                {props.subtitle}
              </p>
              <form>
                <FormGroup className="position-relative has-icon-left mb-0">
                  <Input
                    type="text"
                    placeholder="Tìm kiếm"
                    bsSize="lg"
                    value={value}
                    onChange={onChange}
                  />
                  <div className="form-control-position">
                    <Search size={14} />
                  </div>
                </FormGroup>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
export default TopSearch
