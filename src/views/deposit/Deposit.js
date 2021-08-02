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
  Form,
  FormFeedback,
  FormGroup,
  InputGroupAddon,
} from "reactstrap";
import { Eye, Code, Edit, DollarSign } from "react-feather";
import classnames from "classnames";
import { inputGroupDropdowns } from "./InputGroupSourceCode";
import { useDispatch } from "react-redux";
import { handleConfirm } from "../management/cts/Confirm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { deposit } from "../../redux/actions/myactions/depositAction";

export default function Deposit() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [currency, setCurrency] = useState("VND");
  const [depositAmount, setDepositAmount] = useState(0);
  const dispatch = useDispatch();
  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  localStorage.setItem("ballance", 0);
  const initialBallancee = localStorage.getItem("ballance");
  const afterDep = Number(depositAmount) + Number(initialBallancee);
  const formik = useFormik({
    initialValues: {
      amount: 0,
    },
    onSubmit: (values) => {
      handleConfirm(() => dispatch(deposit(afterDep)));
      localStorage.setItem("ballance", afterDep);
      setDepositAmount(0);
    },
    validationSchema: Yup.object({
      amount: Yup.number().required("Vui lòng không để trống!"),
    }),
  });
  return (
    <Row>
      <Col lg={{ size: 8, offset: 2 }}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <Card>
            <CardHeader className="font-weight-bold">
              Nạp tiền vào tài khoản
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label>Số tiền nạp</Label>
                <InputGroup className="mb-2">
                  <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                  <Input
                    type="number"
                    className="h-auto"
                    name="amount"
                    id="amount"
                    value={depositAmount}
                    onChange={(e) => {
                      setDepositAmount(e.target.value);
                      formik.handleChange(e.target.value);
                    }}
                    invalid={formik.errors.amount && formik.touched.amount}
                  />
                  <FormFeedback>{formik.errors.amount}</FormFeedback>
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
                  <div>{depositAmount}</div>
                </div>
                <div className="d-flex justify-content-between mb-2 font-weight-light">
                  <div>Số dư hiện tại</div>
                  <div>{initialBallancee}</div>
                </div>
                <div className="d-flex justify-content-between mb-2 font-weight-light">
                  <div>Tổng tiền sau nạp</div>
                  <div>{afterDep}</div>
                </div>
                <Button.Ripple color="primary" className="w-100" type="submit">
                  Tiếp tục
                </Button.Ripple>
              </FormGroup>
            </CardBody>
          </Card>
        </Form>
      </Col>
    </Row>
  );
}
