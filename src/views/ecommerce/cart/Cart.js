import { AvFeedback, AvGroup, AvInput } from "availity-reactstrap-validation"
import InputNumber from 'rc-input-number'
import React, { useEffect, useState, useRef } from "react"
import {
  CreditCard, Home, ShoppingCart, X, FileText, Download
} from "react-feather"
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  Button, Card, CardImg,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  FormGroup, Input, InputGroup,
  InputGroupAddon, Label, Media, Row, Table
} from "reactstrap"
import bill from "../../../assets/images/pages/billcyber.png"
import "../../../assets/scss/pages/app-ecommerce-shop.scss"
import "../../../assets/scss/pages/inputnumber.scss"
import "../../../assets/scss/pages/wizard.scss"
import "../../../assets/scss/plugins/extensions/toastr.scss"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { addCart, dellCart } from '../../../redux/actions/myactions/Cartaction'
import { mobileStyle } from "../../forms/form-elements/number-input/InputStyles"
import { productsList } from "./cartData"
import { isUserLoggedIn } from '@utils'
import { useReactToPrint } from 'react-to-print';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)
const Checkout = () => {
  const [dataList,setDataList] = useState(productsList)
  const [activeStep,setActiveStep] = useState(0)
  const [total,setTotal] = useState(null)
  const [note,setNote] = useState('')
  const [userData, setUserData] = useState(null)
  const [adress,setAdress] = useState({
    name: '',
    mobile: '',
    no: '',
    street: '',
    district: '',
    postcode: '',
    city: '',
  })
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const displayPrice = (price) => {
    return new Intl.NumberFormat("vi-VI", {
      style: "currency",
      currency: "VND",
    }).format(price);
  } 
  const steps = [
    {
      title: <ShoppingCart size={22} />,
      content: (
        <div className="list-view product-checkout">
          <div className="checkout-items">
            {dataList.map((item, i) => (
              <Card className="ecommerce-card" key={i}>
                <div className="card-content">
                  <div className="item-img text-center">
                    <img src={item.img} alt="Product" />
                  </div>
                  <CardBody>
                    <div className="item-name detail">
                      <span className="detail">{item.name}</span>
                      <p className="item-company">
                        By <span className="company-name">{item.by}</span>
                      </p>
                      <p className="stock-status-in">Sẵn hàng</p>
                      <div className="item-quantity">
                        <p className="quantity-title">Số lượng</p>
                        <InputNumber
                          min={0}
                          max={10}
                          step={1}
                          mobile
                          className="input-group"
                          style={mobileStyle}
                          defaultValue={1}
                          onChange={(value) => cartChange(value,item)}
                          upHandler = {<div>+</div>}
                          downHandler = {<div>-</div>}
                        />
                      </div>
                      {/* <p className="delivery-date">{item.deliveryBy}</p>
                      <p className="offers">{item.offers}</p> */}
                    </div>
                  </CardBody>
                  <div className="item-options text-center">
                    <div className="item-wrapper">
                      {/* <div className="item-rating">
                        <Badge color="primary" className="badge-md mr-25">
                          <span className="align-middle">4</span>{" "}
                          <Star size={15} />
                        </Badge>
                      </div> */}
                      <div className="item-cost">
                        <h6 className="item-price">{item.price}</h6>
                      </div>
                    </div>
                    {/* <div className="wishlist">
                      <X size={15} />
                      <span className="align-middle ml-25" onClick={() => {dispatch(dellCart(item))}}>Remove</span>
                    </div> */}
                    <div className="cart">
                      <X size={15} />
                      <span className="align-middle ml-25" onClick={() => {handleRemove(item)}}>Xóa</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="checkout-options">
            <Card>
              <CardBody>
                <p className="options-title">Chi tiết</p>
                <div className="coupons">
                  <div className="coupons-title">
                    <p>Mã giảm giá</p>
                  </div>
                  <div className="apply-coupon">
                    <p>Áp dụng</p>
                  </div>
                </div>
                <hr />
                <div className="price-details">
                  <p>Giá chi tiết</p>
                </div>
                <div className="detail">
                  <div className="detail-title">Tổng</div>
                  <div className="detail-amt">{displayPrice(total)}</div>
                </div>
                {/* <div className="detail">
                  <div className="detail-title">Giảm giá</div>
                  <div className="detail-amt discount-amt">-25$</div>
                </div>
                <div className="detail">
                  <div className="detail-title">Thuế ước tính</div>
                  <div className="detail-amt">$1.3</div>
                </div> */}
                {/* <div className="detail">
                  <div className="detail-title">EMI Eligibility</div>
                  <div className="detail-amt emi-details">Details</div>
                </div> */}
                <div className="detail">
                  <div className="detail-title">Phí giao hàng</div>
                  <div className="detail-amt discount-amt">Miễn phí</div>
                </div>
                <hr />
                <div className="detail">
                  <div className="detail-title detail-total">Tổng</div>
                  <div className="detail-amt total-amt">{displayPrice(total)}</div>
                </div>
                <div className="detail">
                  Ghi chú
                </div>
                <div className="detail">
                    <Input
                      type="textarea"
                      name="position"
                      row="2"
                      id="position"
                      onChange ={ (e) => setNote(e.target.value)}
                    />
                </div>
                <Button.Ripple
                  type="submit"
                  block
                  color="primary"
                  className="btn-block"
                  onClick={() => {
                    handleActiveStep(1)}}>
                  Đặt hàng
                </Button.Ripple>
              </CardBody>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: <Home size={22} />,
      content: (
        <div className="list-view product-checkout">
          <Card>
            <CardHeader className="flex-column align-items-start">
              <CardTitle>Thêm địa chỉ mới</CardTitle>
              <p className="text-muted mt-25">
                Chọn "Giao hàng đến địa chỉ này" khi kết thúc
              </p>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="6" sm="12">
                  <AvGroup>
                    <Label for="name"> Họ tên </Label>
                    <AvInput id="name" name="name" type="text" required onChange={(e) => setAdress({...adress,name:e.target.value})} />
                    <AvFeedback>Vui lòng nhập họ tên</AvFeedback>
                  </AvGroup>
                </Col>
                <Col md="6" sm="12">
                  <AvGroup>
                    <Label for="contact-number"> Số điện thoại </Label>
                    <AvInput
                      id="contact-number"
                      name="contact-number"
                      type="text"
                      required
                      onChange={(e) => setAdress({...adress,mobile:e.target.value})}
                    />
                    <AvFeedback>Vui lòng nhập số điện thoại</AvFeedback>
                  </AvGroup>
                </Col>
                <Col md="6" sm="12">
                  <AvGroup>
                    <Label for="apt-no"> Số nhà </Label>
                    <AvInput id="apt-no" name="apt-no" type="text" required onChange={(e) => setAdress({...adress,no:e.target.value})} />
                    <AvFeedback>
                      Vui lòng nhập số nhà
                    </AvFeedback>
                  </AvGroup>
                </Col>
                <Col md="6" sm="12">
                  <AvGroup>
                    <Label for="landmark">
                      {" "}
                      Đường{" "}
                    </Label>
                    <AvInput id="landmark" name="landmark" type="text" onChange={(e) => setAdress({...adress,street:e.target.value})} />
                  </AvGroup>
                </Col>
                <Col md="6" sm="12">
                  <AvGroup>
                    <Label for="town-city"> Quận/Huyện</Label>
                    <AvInput
                      id="town-city"
                      name="town-city"
                      type="text"
                      onChange={(e) => setAdress({...adress,district:e.target.value})}
                      required
                    />
                    <AvFeedback>Vui lòng nhập quận/huyện</AvFeedback>
                  </AvGroup>
                </Col>
                <Col md="6" sm="12">
                  <AvGroup>
                    <Label for="pincode"> Mã vùng </Label>
                    <AvInput
                      id="pincode"
                      name="pincode"
                      type="text"
                      onChange={(e) => setAdress({...adress,postcode:e.target.value})}
                      required
                    />
                    <AvFeedback>Vui lòng nhập mã vùng</AvFeedback>
                  </AvGroup>
                </Col>
                <Col md="6" sm="12">
                  <AvGroup>
                    <Label for="state"> Tỉnh/Thành phố</Label>
                    <AvInput id="state" name="state" type="text" required onChange={(e) => setAdress({...adress,city:e.target.value})}/>
                    <AvFeedback>Vui lòng nhập Tỉnh/Thành phố</AvFeedback>
                  </AvGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="address-type">Loại địa chỉ</Label>
                    <Input type="select" name="select" id="address-type">
                      <option>Nhà</option>
                      <option>Công ty</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="6" md={{ offset: 6, size: 6 }}>
                  <Button.Ripple
                    type="submit"
                    color="primary"
                    onClick={() => handleActiveStep(2)}>
                    Lưu và giao hàng đến địa chỉ này
                  </Button.Ripple>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <div className="customer-card">
            <Card>
              <CardHeader>
                <CardTitle>{adress.name}</CardTitle>
              </CardHeader>
              <CardBody>
                <p className="mb-0">{adress.no} {adress.street} {adress.district} {adress.city}</p>
                {/* <p>{adress.street}</p> */}
                <p>{adress.mobile}</p>
                <p>{adress.postcode}</p>
                <hr />
                <Button.Ripple
                  type="submit"
                  color="primary"
                  className="btn-block"
                  onClick={() => handleActiveStep(3)}>
                  GIAO HÀNG ĐẾN ĐỊA CHỈ NÀY
                </Button.Ripple>
              </CardBody>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: <CreditCard size={22} />,
      content: (
        <Row>
          <Col lg="12">
          <Card>
            {/* <CardImg
              top
              className="img-fluid"
              src={logo}
              alt="card image cap"
            /> */}
            <CardBody>
              <h3 className="mb-2">Đơn hàng của bạn đã được xác nhận !</h3>
              <h5 className="mb-0.5">Xin chào {(userData && userData.name) || 'Khách'}</h5>
              <div>Đơn hàng của bạn đã được xác nhận và sẽ được gửi đi trong vòng 2 ngày tới</div>
            </CardBody>
          </Card>
          </Col>
          <Col className="mb-1 invoice-header" md="5" sm="12">
            <InputGroup>
              <Input placeholder="Email" />
              <InputGroupAddon addonType="append">
                <Button.Ripple color="primary" outline>
                  Gửi hóa đơn
                </Button.Ripple>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col
            className="d-flex flex-column flex-md-row justify-content-end invoice-header mb-1"
            md="7"
            sm="12"
          >
            <Button
              className="mr-1 mb-md-0 mb-1"
              color="primary"
              onClick={handlePrint}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">In</span>
            </Button>
            <Button.Ripple color="primary" outline>
              <Download size="15" />
              <span className="align-middle ml-50">Tải xuống</span>
            </Button.Ripple>
          </Col>
          <Col className="invoice-wrapper" lg={{size:"8",offset:"2"}} md = "12" sm="12">
              <div ref={componentRef} style={{pageBreakInside:"avoid"}}>
                <img className="w-100" src={bill}></img>
              </div>
          </Col>
        </Row>
      )
    }
  ]

  const dispatch = useDispatch()
  const handleActiveStep = index => {
    setActiveStep(index)
  }
  const cartData = useSelector(state => state.myreducers.Cart)
  const handleTotal = () => {
    const sumPrice = cartData.reduce((acc,e) => {
      let sum = parseFloat(e.price)*e.number;
      acc += sum;
      return acc
    },0)
    setTotal(sumPrice.toFixed(2))
  }
  const onValidationError = errors => {
    toast.error("Please Enter Valid Details", {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }
  const handleCheckOut = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://upbe.newca.vn/api/paymentWithVNPay?order_desc=${note}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        const url = result.url
        // window.location.href = url
        window.open(url)
      })
      .catch(error => console.log('error', error));
  }
  const handleConfirmText = () => {
    return MySwal.fire({
      title: 'Thành công!',
      text: 'Bạn đã đặt hàng thành công!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        handleCheckOut()
      }
    })
  }
  const cartChange = (valueAsNumber,item) => {
    dispatch(addCart({
       ...item,
        quanty: valueAsNumber
     }))
  }
  const handleRemove = (item) => {
    dispatch(dellCart(item))
    let index = dataList.findIndex(e => e.id === item.id)
    let newData = dataList
    newData.splice(index,1)
    setDataList(newData)
  }
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
  useEffect(() => {
    handleTotal()
  },[cartData])
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Giỏ hàng"
          breadCrumbParent="Giỏ hàng"
          breadCrumbActive="Thanh toán"
        />
        <div className="ecommerce-application">
          {/* <Wizard
            steps={steps}
            activeStep={activeStep}
            pagination={false}
            enableAllSteps
            validate
            tabPaneClass="mt-5"
            onValidationError={onValidationError}
          /> */}
        <div className="list-view product-checkout">
          <div className="checkout-items">
            {dataList.map((item, i) => (
              <Card className="ecommerce-card" key={i}>
                <div className="card-content">
                  <div className="item-img text-center">
                    <img src={item.img} alt="Product" />
                  </div>
                  <CardBody>
                    <div className="item-name">
                      <span>{item.name}</span>
                      <p className="item-company">
                        By <span className="company-name">{item.by}</span>
                      </p>
                      <p className="stock-status-in">Sẵn hàng</p>
                      <div className="item-quantity">
                        <p className="quantity-title">Thời gian</p>
                        <InputNumber
                          min={0}
                          max={10}
                          step={1}
                          mobile
                          className="input-group"
                          style={mobileStyle}
                          defaultValue={1}
                          onChange={(value) => cartChange(value,item)}
                          upHandler = {<div>+</div>}
                          downHandler = {<div>-</div>}
                        />
                         <div className="quantity-title d-inline-block ml-2">Năm</div>
                      </div>
                      {/* <p className="delivery-date">{item.deliveryBy}</p>
                      <p className="offers">{item.offers}</p> */}
                    </div>
                  </CardBody>
                  <div className="item-options text-center">
                    <div className="item-wrapper">
                      {/* <div className="item-rating">
                        <Badge color="primary" className="badge-md mr-25">
                          <span className="align-middle">4</span>{" "}
                          <Star size={15} />
                        </Badge>
                      </div> */}
                      <div className="item-cost">
                        <h6 className="item-price">{displayPrice(item.price)}</h6>
                      </div>
                    </div>
                    {/* <div className="wishlist">
                      <X size={15} />
                      <span className="align-middle ml-25" onClick={() => {dispatch(dellCart(item))}}>Remove</span>
                    </div> */}
                    <div className="cart">
                      <X size={15} />
                      <span className="align-middle ml-25" onClick={() => {handleRemove(item)}}>Xóa</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="checkout-options">
            <Card>
              <CardBody>
                <p className="options-title">Chi tiết</p>
                <div className="coupons">
                  <div className="coupons-title">
                    <p>Mã giảm giá</p>
                  </div>
                  <div className="apply-coupon">
                    <p>Áp dụng</p>
                  </div>
                </div>
                <hr />
                <div className="price-details">
                  <p>Giá chi tiết</p>
                </div>
                <div className="detail">
                  <div className="detail-title">Tổng</div>
                  <div className="detail-amt">{displayPrice(total)}</div>
                </div>
                {/* <div className="detail">
                  <div className="detail-title">Giảm giá</div>
                  <div className="detail-amt discount-amt">-25$</div>
                </div>
                <div className="detail">
                  <div className="detail-title">Thuế ước tính</div>
                  <div className="detail-amt">$1.3</div>
                </div> */}
                {/* <div className="detail">
                  <div className="detail-title">EMI Eligibility</div>
                  <div className="detail-amt emi-details">Details</div>
                </div> */}
                <div className="detail">
                  <div className="detail-title">Phí giao hàng</div>
                  <div className="detail-amt discount-amt">Miễn phí</div>
                </div>
                <hr />
                <div className="detail">
                  <div className="detail-title detail-total">Tổng</div>
                  <div className="detail-amt total-amt">{displayPrice(total)}</div>
                </div>
                <div className="detail">
                  Ghi chú
                </div>
                <div className="detail">
                    <Input
                      type="textarea"
                      name="position"
                      row="2"
                      id="position"
                      onChange ={ (e) => setNote(e.target.value)}
                    />
                </div>
                <Button.Ripple
                  type="submit"
                  block
                  color="primary"
                  className="btn-block"
                  onClick={() => {
                    handleConfirmText()
                  }}>
                  Đặt hàng
                </Button.Ripple>
              </CardBody>
            </Card>
          </div>
        </div>
          <ToastContainer />
        </div>
      </React.Fragment>
    )
  }

export default Checkout
