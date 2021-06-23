import React from 'react';
import '../../assets/scss/ballance.scss'


export default function Ballance() {
    return (
        <div className="ballance__container">
            <div className="income">
                <div className="income__icon">
                    <i class="fas fa-sack-dollar"></i>
                </div>
                <div className="income__content">
                    <div className="income__content__text">
                        <p>$9999</p>
                    </div>
                    <div className="income__content__total">
                        <p>Tổng</p>
                        <span className="percent">+15%</span>
                    </div>
                </div>
            </div>
            <div className="expence">
                <div className="expence__icon">
                    <i class="fad fa-wallet"></i>
                </div>
                <div className="expence__content">
                    <div className="expence__content__text">
                        <p>$1000</p>
                    </div>
                    <div className="expence__content__total">
                        <p>Thu nhập sắp nhận</p>
                        <span className="percent">-2%</span>
                    </div>
                </div>
            </div>
            <div className="affilate">
                <div className="affilate__icon">
                    <i class="fad fa-user-friends"></i>
                </div>
                <div className="affilate__content">
                    <div className="affilate__content__text">
                        <p>$5000</p>
                    </div>
                    <div className="affilate__content__total">
                        <p>Thu nhập đã nhận</p>
                        <span className="percent">+10%</span>
                    </div>
                </div>
            </div>
            <div className="order">
                <div className="order__icon">
                    <i class="fad fa-cart-plus"></i>
                </div>
                <div className="order__content">
                    <div className="order__content__text">
                        <p>15120</p>
                    </div>
                    <div className="order__content__total">
                        <p>Đơn hàng</p>
                        <span className="percent">+2%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
