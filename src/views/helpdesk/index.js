import React from "react";
import {
  Button, Card,
  CardBody, CardHeader,
  Col, CustomInput,
  Form, FormGroup,
  Input,
  Label
} from "reactstrap";
import "../../assets/scss/pages/data-list.scss";
import "../../assets/scss/plugins/extensions/react-paginate.scss";
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb";

class VerticalForm extends React.Component {
  render() {
    return (
      <>
        <Breadcrumbs
          breadCrumbTitle="Gửi yêu cầu hỗ trợ"
          breadCrumbActive="Gửi yêu cầu hỗ trợ"
        />
        <Card>
          <CardHeader>
            <Col lg="3" md="12">
              <FormGroup>
                <h5 className="text-bold-600">Vấn đề *</h5>
                <CustomInput type="select" name="select" id="typeservice">
                  <option>Lỗi</option>
                  <option>Lỗi</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col lg="3" md="12">
              <FormGroup>
                <h5 className="text-bold-600">Dịch vụ *</h5>
                <CustomInput type="select" name="select" id="typeservice">
                  <option>Chứng thư số</option>
                  <option>Chữ ký số</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col lg="3" md="12">
              <FormGroup>
                <h5 className="text-bold-600">Nhà cung cấp *</h5>
                <CustomInput type="select" name="select" id="typeservice">
                  <option>...</option>
                  <option>...</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col lg="3" md="12">
              <FormGroup>
                <h5 className="text-bold-600">Chi tiết *</h5>
                <CustomInput type="select" name="select" id="typeservice">
                  <option>Token</option>
                  <option>Token</option>
                </CustomInput>
              </FormGroup>
            </Col>
          </CardHeader>
          <CardBody>
            <Form>
              <Col lg="12">
                <FormGroup>
                  <Label for="nameVertical">Tiêu đề</Label>
                  <Input
                    type="text"
                    name="name"
                    id="nameVertical"
                    placeholder="Tiêu đề"
                  />
                </FormGroup>
              </Col>
              <Col lg="12">
                <FormGroup>
                  <Label for="">Nội dung cần hỗ trợ</Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    rows="3"
                    placeholder="Textarea"
                  />
                </FormGroup>
              </Col>
              {/* <Col lg="12">
                <FormGroup>
                  <Label for="">Đính kèm</Label>
                  <DropzoneProgrammatically />{" "}
                </FormGroup>
              </Col> */}
              <Col lg="12">
                <FormGroup>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                    onClick={(e) => e.preventDefault()}
                  >
                    Submit
                  </Button.Ripple>
                  <Button.Ripple
                    outline
                    color="warning"
                    type="reset"
                    className="mb-1"
                  >
                    Reset
                  </Button.Ripple>
                </FormGroup>
              </Col>
            </Form>
          </CardBody>
        </Card>
      </>
    );
  }
}
export default VerticalForm;
