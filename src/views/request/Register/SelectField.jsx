import React, {useState} from 'react';
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

const SelectField = ({ handleSelect }) => {
  const [type,setType] = useState('')
  const [obj,setObj] = useState('')
    return (
            <Card>
          <CardHeader>
            <Col lg="4" md="12">
              <FormGroup className="mb-0">
                <CustomInput 
                type="select" 
                name="requesttype" 
                id="requesttype"
                defaultValue='0' 
                onChange={(e) => setType(e.target.value)}>
                        <option value="0">Yêu cầu đăng kí sử dụng chứng thư số</option>
                        <option value="1">Yêu cầu gia hạn chứng thư số</option>
                        <option value="2">Yêu cầu chỉnh sửa thông tin CTS</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col lg="4" md="12">
              <FormGroup className="mb-0">
                <CustomInput 
                type="select" 
                name="selectobject" 
                id="selecobject" 
                defaultValue='0'
                onChange={(e) => setObj(e.target.value)}>
                    <option value="0">Khách hàng cá nhân</option>
                    <option value="1">Khách hàng tổ chức</option>
                    <option value="2">Khách hàng cá nhân thuộc tổ chức</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col lg="4">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="float-right"
                    onClick={(e) => {
                      e.preventDefault()
                      handleSelect(obj,type)
                    }}
                  >
                    Xác nhận
                  </Button.Ripple>
              </Col>
          </CardHeader>
        </Card>
    );
};

export default SelectField;