import React, { useState } from 'react';
import '../../../../assets/scss/DrawalMoney.scss';

const DrawalMoney = () => {
  const [isActive, setIsActive] = useState(false)
  const activeConfirm = () => {
    setIsActive(!isActive)
  }
  return (
    <div className="drawal-money">
      <div className="drawal-container">
        <div className="commission">
          <div className="commissionText">Tiền hoa hồng</div>
          <div className="commissionNumber">$999</div>
          <div className="moneyIcon">
            <i className="far fa-money-bill-alt"></i>
          </div>
        </div>
        <div className="ballance">
          <div className="ballanceText">Số dư hiện tại</div>
          <div className="ballanceNumber">$999</div>
          <div className="ballanceIcon">
            <i className="fad fa-wallet"></i>
          </div>
        </div>
      </div>
      <div className="drawal-money__button">
        <button onClick={activeConfirm} type="primary" danger >Gửi yêu cầu rút tiền</button>
      </div>
      {/* <table style={{ width: "60%", margin: "auto" }}>
        <tbody>
          <tr>
            <td><i className="far fa-money-bill-alt"></i>Tiền hoa hồng</td>
            <td><i className="fas fa-wallet"></i>Số dư hiện tại</td>
          </tr>
          <tr className="drawal-money__number">
            <td>$999</td>
            <td>$999</td>
          </tr>
          <tr className="drawal-money__button">
            <td colSpan="2">
              <Button onClick={activeConfirm} type="primary" danger >Gởi yêu cầu rút tiền</Button>
            </td>
          </tr>
        </tbody>
      </table> */}
      {/* <div className="drawal-money__confirm" style={{ display: isActive ? "block" : "none" }}>
        <Input className="drawal-money__confirm--input" placeholder="nhập số tiền cần rút. Tổi thiểu 0 đống" />
        <button type="primary" danger className="drawal-money__confirm--button">xác nhận</button>
      </div> */}
    </div >
  )
}

export default DrawalMoney
