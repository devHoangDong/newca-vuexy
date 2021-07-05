// import React from 'react';
// import {Form, Input, Button, Checkbox} from 'antd';
// import '../../assets/scss/EditPassword.scss';
// import MyTitle from '../account/content/Title.jsx';
// import { setLoading as setLoadingAction } from '../../redux/actions/myactions/userAction';
// import { useDispatch } from 'react-redux';
// import userApi from "../../api/userApi";
// const HelpDesk = () => {
//     const dispatch = useDispatch()
//     const onFinish = (values) => {
//         updateUser(values)
//         console.log('Success:', values);
//     };
//     const updateUser = async (params) => {
//         dispatch(setLoadingAction(true))
//         setTimeout(() => {
//             dispatch(setLoadingAction(false))
//         }, 3000);
//         const response = await userApi.addTicket(params)
//     }
//     const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };
//     const layout = {
//         labelCol: { span: 8 },
//         wrapperCol: { span: 16 },
//     };
//     const tailLayout = {
//         wrapperCol: { offset: 8, span: 16 },
//     };
//     return (
//         <div className="editPassword">
//             <div className="editPassword__container">
//                 <div className="editPassword__title">
//                     <MyTitle title="Gửi yêu cầu hỗ trợ" />
//                 </div>
//                 <div className="editForm">
//                     <Form  {...layout}
//                         name="basic"
//                         initialValues={{ remember: true }}
//                         onFinish={onFinish}
//                         onFinishFailed={onFinishFailed}
//                     >
//                         <Form.Item
//                             label={"Tiêu đề"}
//                             name="subject"
//                             rules={[{ required: true, message: 'Tiêu đề không được để trống!' }]}
//                         >
//                         <Input />
//                         </Form.Item>

//                         <Form.Item
//                             label={"Nội dung cần hỗ trợ"}
//                             name="description"
//                             rules={[{ required: true, message: 'Nội dung không được để trống!' }]}
//                         >
//                             <Input.TextArea />
//                         </Form.Item>
//                         <Form.Item {...tailLayout}>
//                             <Button type="primary" htmlType="submit">
//                                 Submit
//                             </Button>
//                         </Form.Item>
//                     </Form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HelpDesk;
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  CustomInput,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
} from "reactstrap";
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb";
import { Check } from "react-feather";
import "../../assets/scss/plugins/extensions/react-paginate.scss";
import "../../assets/scss/pages/data-list.scss";

class VerticalForm extends React.Component {
  render() {
    return (
      <>
        <Breadcrumbs
          breadCrumbTitle="Gửi yêu cầu hỗ trợ"
          breadCrumbParent="Gửi yêu cầu hỗ trợ"
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
