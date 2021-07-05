import { Select } from 'antd';
import React, { useState, useEffect } from 'react';
import s from './SelectInput.module.scss';
// import { Form, Button, Checkbox } from 'antd';
import CaptchaGG from './CaptchaGG';
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

const SelectInput = ({ handleSubmit }) => {
  const [input, setInput] = useState(null)
  const [valid, setValid] = useState(false)
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      span: 8,
    },
  };
  const onchangeInput = event => {
    setInput({
      ...input,
      [event.target.id]: event.target.value
    })
  }
  const onChangeCaptcha = () => {
    setValid(true)
    console.log(valid)
  }
  useEffect(() => {
    setValid(false)
  }, [])
  return (
    <div className={s.InputContainer}>
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
      <Form
        {...layout}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Loại dịch vụ"
          name="serviceType"
        >
          <Select defaultValue="CTS" style={{ width: "30%" }} onChange={handleChange} >
            <Option value="CTS">Chứng thư số</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Mã định danh hoặc serial Chứng thư số"
          name="codeNumber">
          <Input id="codeNumber" onChange={onchangeInput} style={{ borderRadius: '5px' }} />
        </Form.Item>
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(100%/3)', paddingRight: "3rem" }}

        >
          <CaptchaGG onChange={onChangeCaptcha} />
          {/* <img src="./image/captcha.png" width="320" height="32"></img> */}
        </Form.Item>
        {/* <Form.Item
                    style={{ display: 'inline-block', width: 'calc(100%/3)', paddingRight: "3rem" }}
                    name="captcha"
                    justify="space-between"
                >
                    <Input id="captcha" placeholder="Mã Captcha" />
                </Form.Item> */}
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50%/3)' }}
          name="codeNumber"
          justify="space-between"
        >
          <Button disabled={!valid} type="primary" htmlType="submit" style={{ width: '100%' }}>
            Tra cứu
                    </Button>
        </Form.Item>

      </Form>
      {/* <div className={s.InputContainer__typeService}>
                <label for="typeService">Loại dịch vụ</label>
                <Select defaultValue="CTS" style={{ width: "30%" }} onChange={handleChange}>
                    <Option value="CTS">Chứng thư số</Option>
                </Select>
            </div>
            <div className={s.InputContainer__codeNumber}>
                <label for="codeNumber">Mã định danh hoặc serial Chứng thư số <span>*</span></label>
                <Input id="codeNumber" />
            </div> */}
    </div>
  );
};

export default SelectInput;