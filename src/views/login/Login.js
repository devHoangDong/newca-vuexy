import { useSkin } from "@hooks/useSkin";
import "@styles/base/pages/page-auth.scss";
import React, { useState, useEffect } from "react";
import { Facebook, GitHub, Mail, Twitter } from "react-feather";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  CardText,
  CardTitle,
  Col, CustomInput, Form, FormFeedback, FormGroup, Input, Label, Row
} from "reactstrap";
import googleSvg from "../../assets/img/svg/google.svg";
import "../../assets/scss/pages/authentication.scss";
import { login } from "../../redux/actions/myactions/login";
import { useGoogleAuth } from "./GoogleAuthen/index";
import InputPasswordToggle from './../../@core/components/input-password-toggle/index';
import LoginServices from './../../api/LoginServices';
import { alert } from './../common/Confirm';
import { useFormik } from 'formik';
import * as Yup from "yup";
import CaptchaGG from './../search/ServiceSearch/CaptchaGG';

export default function LoginGG() {
  // const toggle = (tab) => {
  //   if (activeTab !== tab) {
  //     setActiveTab(tab);
  //   }
  // };
  // const { signIn } = useGoogleAuth();
  const [valid, setValid] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();
  const [skin, setSkin] = useSkin();
  const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    enableReinitialize: true,
    onSubmit: values => {
      handleSignByPhone(values);
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Vui lòng không để trống!"),
      username: Yup.string().required("Vui lòng không để trống!"),
    })
  })
  // const handleSignIn = (dataLogin) => {
  //   // signIn();
  //   // const googleUser = await signIn();
  //   // if (googleUser) {
  //   //   localStorage.setItem("userData", JSON.stringify(googleUser.profileObj));
  //   //   dispatch(login(googleUser.profileObj));
  //   //   localStorage.setItem("isLogin", true);
  //   //   history.push("/");
  //   // }
  //   if (dataLogin) {
  //     localStorage.setItem("userData", JSON.stringify(dataLogin));
  //     dispatch(login(dataLogin));
  //     localStorage.setItem("isLogin", true);
  //     alert("success", "Đăng nhập thành công!");
  //     setTimeout(history.push("/"), 1500)
  //   } else { alert("error", "Đăng nhập thất bại!") }
  // };
  const handleSignByPhone = async (dataLogin) => {
    // alert("success", "Đăng nhập thành công!");

    let result = await LoginServices.loginByPhone(dataLogin)
    const { error } = result;
    if (error) {
      alert("error", "Đăng nhập thất bại!")
    } else {
      localStorage.setItem("userData", JSON.stringify(result));
      dispatch(login(dataLogin));
      localStorage.setItem("isLogin", true);
      alert("success", "Đăng nhập thành công!");
      setTimeout(history.push("/"), 1500)
    }
    console.log('result: ', result);
  }
  const onChangeCaptcha = () => {
    setValid(true)
    console.log(valid)
  }
  useEffect(() => {
    setValid(false)
  }, [])
  return (
    <>
      <div className="auth-wrapper auth-v2">
        <Row className="auth-inner m-0">
          <Link className="brand-logo" to="/">

            <h2 className="brand-text text-primary ml-1">Cyberlotus</h2>
          </Link>
          <Col
            className="d-none d-lg-flex align-items-center p-5"
            lg="8"
            sm="12"
          >
            <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
              <img className="img-fluid" src={source} alt="Login V2" />
            </div>
          </Col>
          <Col
            className="d-flex align-items-center auth-bg px-2 p-lg-5"
            lg="4"
            sm="12"
          >
            <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
              <CardTitle tag='h2' className='font-weight-bold mb-1'>
                Chào mừng đến Cyberlotus! 👋
              </CardTitle>
              <CardText className='mb-2'>Vui lòng đăng nhập</CardText>
              <Form
                onSubmit={e => {
                  e.preventDefault()
                  formik.handleSubmit()
                }}
              >
                <FormGroup>
                  <Label className='form-label' for='username'>
                    Điện thoại
                  </Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    onChange={formik.handleChange}
                    invalid={formik.errors.username && formik.touched.username}
                    placeholder="Nhập số điện thoại nhận được tin nhắn hỗ trợ"
                  />
                  <FormFeedback>{formik.errors.username}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <div className='d-flex justify-content-between'>
                    <Label className='form-label' for='password'>
                      Mã truy cập
                    </Label>
                    {/* <Link to='/pages/forgot-password-v2'>
                      <small>Quên mật khẩu?</small>
                    </Link> */}
                  </div>
                  <InputPasswordToggle
                    type="text"
                    name="password"
                    id="password"
                    onChange={formik.handleChange}
                    invalid={formik.errors.password && formik.touched.password}
                  />
                  <FormFeedback>{formik.errors.password}</FormFeedback>
                  {/* <InputPasswordToggle className='input-group-merge' id='password' value={password} onChange={e => setPassword(e.target.value)} /> */}
                </FormGroup>
                <CaptchaGG onChange={onChangeCaptcha} />
                {/* <FormGroup>
                  <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
                </FormGroup> */}
                <Button.Ripple className="mt-1" disabled={!valid} color='primary' block type="submit">
                  Đăng nhập
                </Button.Ripple>
              </Form>
              {/* <p className='text-center mt-2'>
                <span className='mr-25'>Chưa có tài khoản?</span>
                <Link to='/pages/register-v2'>
                  <span>Đăng kí</span>
                </Link>
              </p>
              <div className='divider my-2'>
                <div className='divider-text'>hoặc</div>
              </div>
              <div className='auth-footer-btn d-flex justify-content-center'>
                <Button.Ripple
                  className="btn-google"
                  color=""
                >
                  <img src={googleSvg} alt="google" height="15" width="15" />
                </Button.Ripple>
                <Button.Ripple color='facebook'>
                  <Facebook size={14} />
                </Button.Ripple>
                <Button.Ripple color='twitter'>
                  <Twitter size={14} />
                </Button.Ripple>
                <Button.Ripple color='google'>
                  <Mail size={14} />
                </Button.Ripple>
                <Button.Ripple className='mr-0' color='github'>
                  <GitHub size={14} />
                </Button.Ripple>
              </div> */}
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
}
