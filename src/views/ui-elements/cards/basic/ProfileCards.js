import React, {useState,useEffect} from "react"
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Progress
} from "reactstrap"
import { Star, Briefcase } from "react-feather"
import avatarImg from "../../../../assets/img/portrait/small/avatar-s-12.jpg"
import avatarImg2 from "../../../../assets/img/portrait/small/avatar-s-1.jpg"
import Productorders from '../analytics/Customers';
import Sales from '../analytics/Sales';
import OrdersReceived from '../statistics/OrdersReceived';
import QuaterlySales from '../statistics/QuaterlySales';
import RevenueGenerated from '../statistics/RevenueGenerated';
import { isUserLoggedIn } from '@utils'


const ProfileCards = () => {
  const [userData, setUserData] = useState(null)
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
    return (
      <Row>
        <Col lg="12" md="12" sm="12">
          <Card>
            <CardHeader className="mx-auto">
              <div className="avatar mr-1 avatar-xl">
                <img src={avatarImg} alt="avatarImg" />
              </div>
            </CardHeader>
            <CardBody className="text-center">
              <h4>{(userData && userData.name) || 'Khách'}</h4>
              <OrdersReceived/>
              <hr/>
              <OrdersReceived/>
              <hr/>
              <OrdersReceived/>
              {/* <p>Backend Dev</p>
              <div className="card-btns d-flex justify-content-between">
                <Button.Ripple className="gradient-light-primary">
                  Follow
                </Button.Ripple>
                <Button.Ripple color="primary" outline>
                  Message
                </Button.Ripple>
              </div>
              <hr className="my-2" />
              <div className="card-btns d-flex justify-content-between">
                <div className="float-left">
                  <Star size="15" className="warning" />
                  <span className="ml-50 align-middle">4.9</span>
                </div>
                <div className="float-right">
                  <Briefcase size="15" className="primary" />
                  <span className="ml-50 align-middle">Projects</span>
                </div>
              </div> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
export default ProfileCards
