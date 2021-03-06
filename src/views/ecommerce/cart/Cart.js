import { isUserLoggedIn } from '@utils'
import InputNumber from 'rc-input-number'
import React, { useEffect, useRef, useState } from "react"
import { X } from "react-feather"
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  Button, Card,
  CardBody,
  Input
} from "reactstrap"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "../../../assets/scss/pages/app-ecommerce-shop.scss"
import "../../../assets/scss/pages/inputnumber.scss"
import "../../../assets/scss/pages/wizard.scss"
import "../../../assets/scss/plugins/extensions/toastr.scss"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { addCart, dellCart } from '../../../redux/actions/myactions/Cartaction'
import { mobileStyle } from "../../forms/form-elements/number-input/InputStyles"
import { productsList } from "./cartData"


const MySwal = withReactContent(Swal)
const Checkout = () => {
  const [dataList, setDataList] = useState(productsList)
  const [total, setTotal] = useState(null)
  const [note, setNote] = useState('')
  const [userData, setUserData] = useState(null)

  // const componentRef = useRef()
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  const displayPrice = (price) => {
    return new Intl.NumberFormat("vi-VI", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }
  // const steps = [
  //   {
  //     title: <ShoppingCart size={22} />,
  //     content: (
  //       <div className="list-view product-checkout">
  //         <div className="checkout-items">
  //           {dataList.map((item, i) => (
  //             <Card className="ecommerce-card" key={i}>
  //               <div className="card-content">
  //                 <div className="item-img text-center">
  //                   <img src={item.img} alt="Product" />
  //                 </div>
  //                 <CardBody>
  //                   <div className="item-name detail">
  //                     <span className="detail">{item.name}</span>
  //                     <p className="item-company">
  //                       By <span className="company-name">{item.by}</span>
  //                     </p>
  //                     <p className="stock-status-in">S???n h??ng</p>
  //                     <div className="item-quantity">
  //                       <p className="quantity-title">S??? l?????ng</p>
  //                       <InputNumber
  //                         min={0}
  //                         max={10}
  //                         step={1}
  //                         mobile
  //                         className="input-group"
  //                         style={mobileStyle}
  //                         defaultValue={1}
  //                         onChange={(value) => cartChange(value, item)}
  //                         upHandler={<div>+</div>}
  //                         downHandler={<div>-</div>}
  //                       />
  //                     </div>
  //                     {/* <p className="delivery-date">{item.deliveryBy}</p>
  //                     <p className="offers">{item.offers}</p> */}
  //                   </div>
  //                 </CardBody>
  //                 <div className="item-options text-center">
  //                   <div className="item-wrapper">
  //                     {/* <div className="item-rating">
  //                       <Badge color="primary" className="badge-md mr-25">
  //                         <span className="align-middle">4</span>{" "}
  //                         <Star size={15} />
  //                       </Badge>
  //                     </div> */}
  //                     <div className="item-cost">
  //                       <h6 className="item-price">{item.price}</h6>
  //                     </div>
  //                   </div>
  //                   {/* <div className="wishlist">
  //                     <X size={15} />
  //                     <span className="align-middle ml-25" onClick={() => {dispatch(dellCart(item))}}>Remove</span>
  //                   </div> */}
  //                   <div className="cart">
  //                     <X size={15} />
  //                     <span className="align-middle ml-25" onClick={() => { handleRemove(item) }}>X??a</span>
  //                   </div>
  //                 </div>
  //               </div>
  //             </Card>
  //           ))}
  //         </div>
  //         <div className="checkout-options">
  //           <Card>
  //             <CardBody>
  //               <p className="options-title">Chi ti???t</p>
  //               <div className="coupons">
  //                 <div className="coupons-title">
  //                   <p>M?? gi???m gi??</p>
  //                 </div>
  //                 <div className="apply-coupon">
  //                   <p>??p d???ng</p>
  //                 </div>
  //               </div>
  //               <hr />
  //               <div className="price-details">
  //                 <p>Gi?? chi ti???t</p>
  //               </div>
  //               <div className="detail">
  //                 <div className="detail-title">T???ng</div>
  //                 <div className="detail-amt">{displayPrice(total)}</div>
  //               </div>
  //               {/* <div className="detail">
  //                 <div className="detail-title">Gi???m gi??</div>
  //                 <div className="detail-amt discount-amt">-25$</div>
  //               </div>
  //               <div className="detail">
  //                 <div className="detail-title">Thu??? ?????c t??nh</div>
  //                 <div className="detail-amt">$1.3</div>
  //               </div> */}
  //               {/* <div className="detail">
  //                 <div className="detail-title">EMI Eligibility</div>
  //                 <div className="detail-amt emi-details">Details</div>
  //               </div> */}
  //               <div className="detail">
  //                 <div className="detail-title">Ph?? giao h??ng</div>
  //                 <div className="detail-amt discount-amt">Mi???n ph??</div>
  //               </div>
  //               <hr />
  //               <div className="detail">
  //                 <div className="detail-title detail-total">T???ng</div>
  //                 <div className="detail-amt total-amt">{displayPrice(total)}</div>
  //               </div>
  //               <div className="detail">
  //                 Ghi ch??
  //               </div>
  //               <div className="detail">
  //                 <Input
  //                   type="textarea"
  //                   name="position"
  //                   row="2"
  //                   id="position"
  //                   onChange={(e) => setNote(e.target.value)}
  //                 />
  //               </div>
  //               <Button.Ripple
  //                 type="submit"
  //                 block
  //                 color="primary"
  //                 className="btn-block"
  //                 onClick={() => {
  //                   handleActiveStep(1)
  //                 }}>
  //                 ?????t h??ng
  //               </Button.Ripple>
  //             </CardBody>
  //           </Card>
  //         </div>
  //       </div>
  //     )
  //   },
  //   {
  //     title: <Home size={22} />,
  //     content: (
  //       <div className="list-view product-checkout">
  //         <Card>
  //           <CardHeader className="flex-column align-items-start">
  //             <CardTitle>Th??m ?????a ch??? m???i</CardTitle>
  //             <p className="text-muted mt-25">
  //               Ch???n "Giao h??ng ?????n ?????a ch??? n??y" khi k???t th??c
  //             </p>
  //           </CardHeader>
  //           <CardBody>
  //             <Row>
  //               <Col md="6" sm="12">
  //                 <AvGroup>
  //                   <Label for="name"> H??? t??n </Label>
  //                   <AvInput id="name" name="name" type="text" required onChange={(e) => setAdress({ ...adress, name: e.target.value })} />
  //                   <AvFeedback>Vui l??ng nh???p h??? t??n</AvFeedback>
  //                 </AvGroup>
  //               </Col>
  //               <Col md="6" sm="12">
  //                 <AvGroup>
  //                   <Label for="contact-number"> S??? ??i???n tho???i </Label>
  //                   <AvInput
  //                     id="contact-number"
  //                     name="contact-number"
  //                     type="text"
  //                     required
  //                     onChange={(e) => setAdress({ ...adress, mobile: e.target.value })}
  //                   />
  //                   <AvFeedback>Vui l??ng nh???p s??? ??i???n tho???i</AvFeedback>
  //                 </AvGroup>
  //               </Col>
  //               <Col md="6" sm="12">
  //                 <AvGroup>
  //                   <Label for="apt-no"> S??? nh?? </Label>
  //                   <AvInput id="apt-no" name="apt-no" type="text" required onChange={(e) => setAdress({ ...adress, no: e.target.value })} />
  //                   <AvFeedback>
  //                     Vui l??ng nh???p s??? nh??
  //                   </AvFeedback>
  //                 </AvGroup>
  //               </Col>
  //               <Col md="6" sm="12">
  //                 <AvGroup>
  //                   <Label for="landmark">
  //                     {" "}
  //                     ???????ng{" "}
  //                   </Label>
  //                   <AvInput id="landmark" name="landmark" type="text" onChange={(e) => setAdress({ ...adress, street: e.target.value })} />
  //                 </AvGroup>
  //               </Col>
  //               <Col md="6" sm="12">
  //                 <AvGroup>
  //                   <Label for="town-city"> Qu???n/Huy???n</Label>
  //                   <AvInput
  //                     id="town-city"
  //                     name="town-city"
  //                     type="text"
  //                     onChange={(e) => setAdress({ ...adress, district: e.target.value })}
  //                     required
  //                   />
  //                   <AvFeedback>Vui l??ng nh???p qu???n/huy???n</AvFeedback>
  //                 </AvGroup>
  //               </Col>
  //               <Col md="6" sm="12">
  //                 <AvGroup>
  //                   <Label for="pincode"> M?? v??ng </Label>
  //                   <AvInput
  //                     id="pincode"
  //                     name="pincode"
  //                     type="text"
  //                     onChange={(e) => setAdress({ ...adress, postcode: e.target.value })}
  //                     required
  //                   />
  //                   <AvFeedback>Vui l??ng nh???p m?? v??ng</AvFeedback>
  //                 </AvGroup>
  //               </Col>
  //               <Col md="6" sm="12">
  //                 <AvGroup>
  //                   <Label for="state"> T???nh/Th??nh ph???</Label>
  //                   <AvInput id="state" name="state" type="text" required onChange={(e) => setAdress({ ...adress, city: e.target.value })} />
  //                   <AvFeedback>Vui l??ng nh???p T???nh/Th??nh ph???</AvFeedback>
  //                 </AvGroup>
  //               </Col>
  //               <Col md="6" sm="12">
  //                 <FormGroup>
  //                   <Label for="address-type">Lo???i ?????a ch???</Label>
  //                   <Input type="select" name="select" id="address-type">
  //                     <option>Nh??</option>
  //                     <option>C??ng ty</option>
  //                   </Input>
  //                 </FormGroup>
  //               </Col>
  //               <Col sm="6" md={{ offset: 6, size: 6 }}>
  //                 <Button.Ripple
  //                   type="submit"
  //                   color="primary"
  //                   onClick={() => handleActiveStep(2)}>
  //                   L??u v?? giao h??ng ?????n ?????a ch??? n??y
  //                 </Button.Ripple>
  //               </Col>
  //             </Row>
  //           </CardBody>
  //         </Card>
  //         <div className="customer-card">
  //           <Card>
  //             <CardHeader>
  //               <CardTitle>{adress.name}</CardTitle>
  //             </CardHeader>
  //             <CardBody>
  //               <p className="mb-0">{adress.no} {adress.street} {adress.district} {adress.city}</p>
  //               {/* <p>{adress.street}</p> */}
  //               <p>{adress.mobile}</p>
  //               <p>{adress.postcode}</p>
  //               <hr />
  //               <Button.Ripple
  //                 type="submit"
  //                 color="primary"
  //                 className="btn-block"
  //                 onClick={() => handleActiveStep(3)}>
  //                 GIAO H??NG ?????N ?????A CH??? N??Y
  //               </Button.Ripple>
  //             </CardBody>
  //           </Card>
  //         </div>
  //       </div>
  //     )
  //   },
  //   {
  //     title: <CreditCard size={22} />,
  //     content: (
  //       <Row>
  //         <Col lg="12">
  //           <Card>
  //             {/* <CardImg
  //             top
  //             className="img-fluid"
  //             src={logo}
  //             alt="card image cap"
  //           /> */}
  //             <CardBody>
  //               <h3 className="mb-2">????n h??ng c???a b???n ???? ???????c x??c nh???n !</h3>
  //               <h5 className="mb-0.5">Xin ch??o {(userData && userData.name) || 'Kh??ch'}</h5>
  //               <div>????n h??ng c???a b???n ???? ???????c x??c nh???n v?? s??? ???????c g???i ??i trong v??ng 2 ng??y t???i</div>
  //             </CardBody>
  //           </Card>
  //         </Col>
  //         <Col className="mb-1 invoice-header" md="5" sm="12">
  //           <InputGroup>
  //             <Input placeholder="Email" />
  //             <InputGroupAddon addonType="append">
  //               <Button.Ripple color="primary" outline>
  //                 G???i h??a ????n
  //               </Button.Ripple>
  //             </InputGroupAddon>
  //           </InputGroup>
  //         </Col>
  //         <Col
  //           className="d-flex flex-column flex-md-row justify-content-end invoice-header mb-1"
  //           md="7"
  //           sm="12"
  //         >
  //           <Button
  //             className="mr-1 mb-md-0 mb-1"
  //             color="primary"
  //             onClick={handlePrint}
  //           >
  //             <FileText size="15" />
  //             <span className="align-middle ml-50">In</span>
  //           </Button>
  //           <Button.Ripple color="primary" outline>
  //             <Download size="15" />
  //             <span className="align-middle ml-50">T???i xu???ng</span>
  //           </Button.Ripple>
  //         </Col>
  //         <Col className="invoice-wrapper" lg={{ size: "8", offset: "2" }} md="12" sm="12">
  //           <div ref={componentRef} style={{ pageBreakInside: "avoid" }}>
  //             <img className="w-100" src={bill}></img>
  //           </div>
  //         </Col>
  //       </Row>
  //     )
  //   }
  // ]

  const dispatch = useDispatch()
  // const handleActiveStep = index => {
  //   setActiveStep(index)
  // }
  const cartData = useSelector(state => state.myreducers.Cart)
  const handleTotal = () => {
    const sumPrice = cartData.reduce((acc, e) => {
      let sum = parseFloat(e.price) * e.number;
      acc += sum;
      return acc
    }, 0)
    setTotal(sumPrice.toFixed(2))
  }
  // const onValidationError = errors => {
  //   toast.error("Please Enter Valid Details", {
  //     position: toast.POSITION.BOTTOM_RIGHT
  //   })
  // }
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
      title: 'Th??nh c??ng!',
      text: 'B???n ???? ?????t h??ng th??nh c??ng!',
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
  const cartChange = (valueAsNumber, item) => {
    dispatch(addCart({
      ...item,
      quanty: valueAsNumber
    }))
  }
  const handleRemove = (item) => {
    dispatch(dellCart(item))
    let index = dataList.findIndex(e => e.id === item.id)
    let newData = dataList
    newData.splice(index, 1)
    setDataList(newData)
  }
  useEffect(() => {
    if (isUserLoggedIn) {
      const userGoG = JSON.parse(localStorage.getItem('userData'))
      const userToken = JSON.parse(localStorage.getItem('userToken'))
      if (userGoG) { setUserData(userGoG) }
      else {
        setUserData(userToken)
      }
    }
  }, [])
  useEffect(() => {
    handleTotal()
  }, [cartData])
  return (
    <React.Fragment>
      <Breadcrumbs
        breadCrumbTitle="Gi??? h??ng"
        breadCrumbActive="Gi??? h??ng"
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
                      <p className="stock-status-in">S???n h??ng</p>
                      <div className="item-quantity">
                        <p className="quantity-title">Th???i gian</p>
                        <InputNumber
                          min={0}
                          max={10}
                          step={1}
                          mobile
                          className="input-group"
                          style={mobileStyle}
                          defaultValue={1}
                          onChange={(value) => cartChange(value, item)}
                          upHandler={<div>+</div>}
                          downHandler={<div>-</div>}
                        />
                        <div className="quantity-title d-inline-block ml-2">N??m</div>
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
                      <span className="align-middle ml-25" onClick={() => { handleRemove(item) }}>X??a</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="checkout-options">
            <Card>
              <CardBody>
                <p className="options-title">Chi ti???t</p>
                <div className="coupons">
                  <div className="coupons-title">
                    <p>M?? gi???m gi??</p>
                  </div>
                  <div className="apply-coupon">
                    <p>??p d???ng</p>
                  </div>
                </div>
                <hr />
                <div className="price-details">
                  <p>Gi?? chi ti???t</p>
                </div>
                <div className="detail">
                  <div className="detail-title">T???ng</div>
                  <div className="detail-amt">{displayPrice(total)}</div>
                </div>
                {/* <div className="detail">
                  <div className="detail-title">Gi???m gi??</div>
                  <div className="detail-amt discount-amt">-25$</div>
                </div>
                <div className="detail">
                  <div className="detail-title">Thu??? ?????c t??nh</div>
                  <div className="detail-amt">$1.3</div>
                </div> */}
                {/* <div className="detail">
                  <div className="detail-title">EMI Eligibility</div>
                  <div className="detail-amt emi-details">Details</div>
                </div> */}
                <div className="detail">
                  <div className="detail-title">Ph?? giao h??ng</div>
                  <div className="detail-amt discount-amt">Mi???n ph??</div>
                </div>
                <hr />
                <div className="detail">
                  <div className="detail-title detail-total">T???ng</div>
                  <div className="detail-amt total-amt">{displayPrice(total)}</div>
                </div>
                <div className="detail">
                  Ghi ch??
                </div>
                <div className="detail">
                  <Input
                    type="textarea"
                    name="position"
                    row="2"
                    id="position"
                    onChange={(e) => setNote(e.target.value)}
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
                  ?????t h??ng
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
