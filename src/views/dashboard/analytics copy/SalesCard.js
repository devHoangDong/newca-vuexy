import React, {useEffect, useState}from "react"
import { Card, CardBody } from "reactstrap"
import { Award } from "react-feather"
import { isUserLoggedIn } from '@utils'
import defaultAvatar from '@src/assets/images/portrait/small/avatardefault.svg'

import decorLeft from "../../../assets/img/elements/decore-left.png"
import decorRight from "../../../assets/img/elements/decore-right.png"

const SalesCard = () => {
  const [userData, setUserData] = useState(null)
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
    return (
      <Card className="bg-analytics text-white sales-card">
        <CardBody className="text-center">
          <img src={decorLeft} alt="card-img-left" className="img-left" />
          <img src={decorRight} alt="card-img-right" className="img-right" />
          <div className="avatar avatar-xl bg-primary shadow avatar-dashboard mt-0">
            <div className="avatar-content">
              <Award className="text-white" size={28} />
            </div>
          </div>
          <div className="award-info text-center">
            <h1 className="mb-2 text-white">Chào mừng {(userData && userData.name) || 'Khách'},</h1>
            <p className="m-auto mb-0 w-75">
              Bạn đã đạt hơn <strong>57.6%</strong> đơn hàng ngày hôm nay. Kiểm tra giỏ hàng trong tài khoản của bạn.
            </p>
          </div>
        </CardBody>
      </Card>
    )
  }
export default SalesCard
