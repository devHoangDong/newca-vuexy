import React , {useState} from "react"
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap"
import { Link } from "react-router-dom"
import Checkbox from "../components/@vuexy/checkbox/CheckboxesVuexy"
import { Mail, Lock, Check, Facebook, Twitter, GitHub } from "react-feather"
import { history } from "../history"
import googleSvg from "../assets/img/svg/google.svg"
import { connect } from "react-redux"

import {
  submitLoginWithFireBase,
  loginWithFB,
  loginWithTwitter,
  loginWithGoogle,
  loginWithGithub
} from "../redux/actions/auth/loginActions"

const LoginFirebase =() => {
  const [email, setEmail] = useState("demo@demo.com")
  const [password, setPassword] = useState("demodemo")
  const [remember, setRemember] = useState(false)
  const loginWithGoogle = () => {
    return dispatch => {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebaseAuth
        .signInWithPopup(provider)
        .then(function(result) {
          let token = result.credential.accessToken,
            user = result.user.email,
            name = result.user.displayName,
            photoUrl = result.user.photoURL
          dispatch({
            type: "LOGIN",
            payload: {
              email: user,
              name: name,
              photoUrl,
              token,
              loggedInWith: "firebase"
            }
          })
          history.push("/")
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
  

  const handleLogin = e => {
    e.preventDefault()
    submitLoginWithFireBase(
      email,
      password,
      remember
    )
  }
 

  const handleRemember = e => {
    setRemember(e.target.checked)
  }
    return (
      <React.Fragment>
        {/* <CardBody className="pt-1">
          <Form action="/" onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Mail size={15} />
              </div>
              <Label>Email</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={this.handleRemember}
              />
              <div className="float-right">
                <Link to="/pages/forgot-password">Forgot Password?</Link>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button.Ripple
                color="primary"
                outline
                onClick={() => {
                  history.push("/pages/register")
                }}
              >
                Register
              </Button.Ripple>
              <Button.Ripple color="primary" type="submit">
                Login
              </Button.Ripple>
            </div>
          </Form>
        </CardBody> */}
        <div className="auth-footer">
          {/* <div className="divider">
            <div className="divider-text">OR</div>
          </div> */}
          <div className="footer-btn">
            <Button.Ripple
              className="btn-facebook"
              color=""
              // onClick={() => {
              //   this.props.loginWithFB()
              // }}
            >
              <Facebook size={14} />
            </Button.Ripple>
            <Button.Ripple
              className="btn-twitter"
              color=""
              // onClick={this.props.loginWithTwitter}
            >
              <Twitter size={14} stroke="white" />
            </Button.Ripple>
            <Button.Ripple
              className="btn-google"
              color=""
              onClick={loginWithGoogle()}
            >
              <img src={googleSvg} alt="google" height="15" width="15" />
            </Button.Ripple>
            <Button.Ripple
              className="btn-github"
              color=""
              onClick={this.props.loginWithGithub}
            >
              <GitHub size={14} stroke="white" />
            </Button.Ripple>
          </div>
        </div>
      </React.Fragment>
    )
  }

export default LoginFirebase
