import React, {useState, useEffect} from "react"
import {
  Alert,
  Button,
  Media,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col
} from "reactstrap"
import img from "../../assets/img/portrait/small/avatar-s-11.jpg"
import { isUserLoggedIn } from '@utils'
import defaultAvatar from '@src/assets/images/portrait/small/avatardefault.svg'


const General = () => {
  const [userData, setUserData] = useState(null)
  const [visible, setVisible] = useState(true)
  const userAvatar = (userData && userData.imageUrl) || defaultAvatar
  useEffect(() => {
    if (isUserLoggedIn) {
      const userGoG = JSON.parse(localStorage.getItem('userData'))
      const userToken = JSON.parse(localStorage.getItem('userToken'))
      if (userGoG) { setUserData(userGoG)} 
      else {
        setUserData(userToken)
      }
    }
  }, [])
  const dismissAlert = () => setVisible(false)
    return (
      <React.Fragment>
        <Media>
          <Media className="mr-1" left href="#">
            <Media
              className="rounded-circle"
              object
              src={userAvatar}
              alt="User"
              height="64"
              width="64"
            />
          </Media>
          <Media className="mt-25" body>
            <div className="d-flex flex-sm-row flex-column justify-content-start px-0">
              <Button.Ripple
                tag="label"
                className="mr-50 cursor-pointer"
                color="primary"
                outline
              >
                Chọn ảnh
                <Input type="file" name="file" id="uploadImg" hidden />
              </Button.Ripple>
              <Button.Ripple color="flat-danger">Xóa</Button.Ripple>
            </div>
            <p className="text-muted mt-50">
              <small>Định dạng JPG, GIF hoặc PNG. Dung lượng tối đa 1MB</small>
            </p>
          </Media>
        </Media>
        <Form className="mt-2" onSubmit={e => e.preventDefault()}>
          <Row>
            <Col sm="12">
              <FormGroup>
                <Label for="userName">Tên người dùng</Label>
                <Input id="userName" defaultValue={userData?.name} />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="name">Họ tên</Label>
                <Input id="name" defaultValue={userData?.name} />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="email">Email</Label>
                <Input id="email" defaultValue="john@admin.com" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <Alert
                className="p-50"
                color="warning"
                isOpen={visible}
                toggle={dismissAlert}
              >
                <p className="mb-0">
                  Email của bạn chưa được xác nhận. Vui lòng kiểm tra hộp thư đến.
                  <span className="text-primary">{" "}Gửi lại thư xác nhận</span>
                </p>
              </Alert>
            </Col>
            {/* <Col sm="12">
              <FormGroup>
                <Label for="company">Company</Label>
                <Input
                  id="company"
                  defaultValue="SnowMash Technologies Pvt Ltd"
                />
              </FormGroup>
            </Col> */}
            <Col className="d-flex justify-content-start flex-wrap" sm="12">
              <Button.Ripple className="mr-50" type="submit" color="primary">
                Lưu
              </Button.Ripple>
              <Button.Ripple type="submit" color="danger">
                Hủy
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </React.Fragment>
    )
  }
export default General
