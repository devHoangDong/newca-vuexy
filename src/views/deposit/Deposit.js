import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardBody, CardHeader,
  Col, CustomInput,
  DropdownItem, DropdownMenu, DropdownToggle,
  Form,
  FormFeedback,
  FormGroup, Input, InputGroup,
  InputGroupAddon, InputGroupButtonDropdown, Label,
  Row
} from "reactstrap";
import * as Yup from "yup";
import { deposit } from "../../redux/actions/myactions/depositAction";
import { handleConfirm } from "../management/cts/Confirm";

export default function Deposit() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [currency, setCurrency] = useState("VND");
  const [depositAmount, setDepositAmount] = useState(0);
  const [initialBallance, setInitialBallance] = useState(null);
  const dispatch = useDispatch();
  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  const currentBallance = localStorage.getItem("ballance") || initialBallance;
  const afterDep = currentBallance
    ? Number(depositAmount) + Number(currentBallance)
    : 0;
  const handleDeposit = () => {
    dispatch(deposit());
    localStorage.setItem("ballance", afterDep);
    setDepositAmount(0);
  };
  const handleGetBallance = async () => {
    await axios.get("/ballance").then(function (response) {
      setInitialBallance(response.data);
    });
  };
  const formik = useFormik({
    initialValues: {
      amount: 0,
    },
    onSubmit: (values) => {
      handleConfirm(handleDeposit);
    },
    validationSchema: Yup.object({
      amount: Yup.number()
        .required("Vui lòng không để trống!")
        .min(1000000, "Số tiền nạp không nhỏ hơn 1000000")
        .max(200000000, "Số tiền nạp không lớn hơn 20000000"),
    }),
  });
  useEffect(() => {
    handleGetBallance();
  }, []);
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
                      formik.handleChange(e);
                    }}
                    invalid={formik.errors.amount && formik.touched.amount}
                  />
                  <InputGroupButtonDropdown
                    addonType="append"
                    isOpen={openDropdown}
                    toggle={handleDropdown}
                  >
                    <DropdownToggle
                      className="rounded-right"
                      color="primary"
                      caret
                    >
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
                  <FormFeedback>{formik.errors.amount}</FormFeedback>
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
                  <div>{currentBallance}</div>
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
