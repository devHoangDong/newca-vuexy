import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  InputGroup,
  CustomInput,
  Input,
  Label,
  Row,
  Col,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  InputGroupAddon,
} from "reactstrap";
import { Eye, Code, Edit, DollarSign } from "react-feather";
import classnames from "classnames";
import { inputGroupDropdowns } from "./InputGroupSourceCode";

export default function Deposit() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [currency, setCurrency] = useState("VND");
  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <Row>
      <Col lg={{ size: 8, offset: 2 }}>
        <Card>
          <CardHeader className="font-weight-bold">
            Nạp tiền vào tài khoản
          </CardHeader>
          <CardBody>
            <FormGroup>
              <Label>Số tiền nạp</Label>
              <InputGroup className="mb-2">
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input className="h-auto" />
                <InputGroupButtonDropdown
                  addonType="append"
                  isOpen={openDropdown}
                  toggle={handleDropdown}
                >
                  <DropdownToggle color="primary" caret>
                    {currency}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      className="text-center w-100"
                      onClick={() => setCurrency("VND")}
                    >
                      VND
                    </DropdownItem>
                    <DropdownItem
                      className="text-center w-100"
                      onClick={() => setCurrency("USD")}
                    >
                      USD
                    </DropdownItem>
                  </DropdownMenu>
                </InputGroupButtonDropdown>
              </InputGroup>
              <Label>Phương thức nạp tiền</Label>
              <CustomInput
                type="select"
                name="select"
                id="exampleSelectCustom"
                className="mb-2"
              >
                <option>Visa</option>
                <option>MasterCard</option>
                <option>Online Banking</option>
                <option>Online Banking</option>
                <option>Local CreditCard</option>
                <option>VTC pay E-wallet</option>
              </CustomInput>
              <div className="d-flex justify-content-between mb-2">
                <div>Phí giao dịch</div>
                <div className="badge badge-primary text-wrap">Free</div>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-2 mt-2 font-weight-bold">
                <div>Số tiền nạp</div>
                <div>1.000.000.000</div>
              </div>
              <div className="d-flex justify-content-between mb-2 font-weight-light">
                <div>Số dư hiện tại</div>
                <div>1.000.000.000</div>
              </div>
              <div className="d-flex justify-content-between mb-2 font-weight-light">
                <div>Tổng tiền sau nạp</div>
                <div>1.000.000.000</div>
              </div>
              <Button.Ripple color="primary" className="w-100">
                Tiếp tục
              </Button.Ripple>
            </FormGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
