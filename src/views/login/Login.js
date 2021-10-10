import { useSkin } from "@hooks/useSkin";
import "@styles/base/pages/page-auth.scss";
import React, { useState } from "react";
import { Facebook, GitHub, Mail, Twitter } from "react-feather";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  CardText,
  CardTitle,
  Col,
  Row
} from "reactstrap";
import googleSvg from "../../assets/img/svg/google.svg";
import "../../assets/scss/pages/authentication.scss";
import { login } from "../../redux/actions/myactions/login";
import { useGoogleAuth } from "./GoogleAuthen/index";
import { axios } from 'axios';

export default function LoginGG() {
  // const toggle = (tab) => {
  //   if (activeTab !== tab) {
  //     setActiveTab(tab);
  //   }
  // };
  const { signIn } = useGoogleAuth();
  const dispatch = useDispatch();
  const history = useHistory();
  const [skin, setSkin] = useSkin();
  const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  const handleSignIn = async () => {
    signIn();
    const googleUser = await signIn();
    if (googleUser) {
      
      localStorage.setItem("userData", JSON.stringify(googleUser.profileObj));
      dispatch(login(googleUser.profileObj));
      localStorage.setItem("isLogin", true);
      history.push("/");
    }
  };
  return (
    <>
      <div className="auth-wrapper auth-v2">
        <Row className="auth-inner m-0">
          <Link className="brand-logo" to="/">

            <h2 className="brand-text text-primary ml-1">Newca</h2>
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
              <CardTitle tag="h2" className="font-weight-bold mb-1">
                Chào mừng đến Newca!👋
              </CardTitle>
              <CardText className="mb-2">Vui lòng đăng nhập tài khoản</CardText>

              {/* <Button.Ripple onClick={tokenSignIn} color='primary' block>
                Đăng nhập với Token
              </Button.Ripple> */}
              {/* <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div> */}
              <div className="auth-footer-btn d-flex justify-content-center">
                <Button.Ripple
                  className="btn-google"
                  color=""
                  onClick={handleSignIn}
                >
                  <img src={googleSvg} alt="google" height="15" width="15" />
                </Button.Ripple>
                <Button.Ripple color="facebook">
                  <Facebook size={14} />
                </Button.Ripple>
                <Button.Ripple color="twitter">
                  <Twitter size={14} />
                </Button.Ripple>
                <Button.Ripple color="google">
                  <Mail size={14} />
                </Button.Ripple>
                <Button.Ripple className="mr-0" color="github">
                  <GitHub size={14} />
                </Button.Ripple>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
}
