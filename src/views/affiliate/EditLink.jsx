import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import userApi from '../../api/userApi';
import affiliateApi from '../../api/affiliateApi';
import { setLoading as setLoadingAction } from '../../redux/actions/myactions/userAction'
import { useDispatch } from 'react-redux';
import {
  TabContent,
   TabPane,
   Card,
   CardBody,
   Input,
   Button,
   Row,
   Col,
    Nav,
    InputGroup,
    CustomInput, 
   NavItem,
    NavLink} from "reactstrap"


const optionsSelection = [
  { label: 'email', value: 'email' },
  { label: 'số điện thoại', value: 'phone' },
  { label: 'khác', value: 'khac' },
];
const EditLink = () => {
  const initialLink = 'https://newca.vn/affiliate/'
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  const [valueSelect, setValueSelect] = useState('')
  const [inputSelect, setInputSelect] = useState('')
  const [valueLink, setValueLink] = useState('https://newca.vn/affiliate/')
  // const state = { value: "" };
  const fetchApi = async () => {
    const params = {
      email: "mr.tiennv@gmail.com"
    }
    const response = await userApi.getUsers(params)
    setUser(response)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const onChangeSelection = (e) => {
    setValueSelect(e.target.value)
    if (e.target.value === 'email') {
      setValueLink(initialLink + user.email)
    }
    else if (e.target.value === 'phone') {
      setValueLink(initialLink + user.phone)
    }
    else {
      setValueLink(initialLink + inputSelect)
    }
  }
  const onChangeInputSelect = e => {
    setInputSelect(e.target.value)
    setValueLink(initialLink + e.target.value)
  }
  const saveEdit = async () => {
    setValueLink(initialLink + inputSelect)
    dispatch(setLoadingAction(true))
    setTimeout(() => {
      dispatch(setLoadingAction(false))
    }, 3000);
    let params = {}
    if (valueSelect === 'email') {
      params = {
        affiliate_code: user.email,
        email: user.email
      }
    }
    else if (valueSelect === 'phone') {
      params = {
        affiliate_code: user.phone,
        email: user.email
      }
    }
    else if (inputSelect !== '') {
      params = {
        affiliate_code: inputSelect,
        email: user.email
      }
    }
    else {
      message.error('Link không được để trống');
      return
    }
    const response = await affiliateApi.getAffiliate(params)
    message.success('Cập nhật link thành công');

  }

  return (
    <Card>
      <CardBody>
        <Row className="d-flex h-100">
          <Col lg={8} md={12}>
          <Input value={valueLink} disabled />
          </Col>
          <Col lg={2} md={12} >
          <Button.Ripple color="primary">Copy</Button.Ripple>
          </Col>
        </Row>
        <Row className="mt-2">
        <Col lg={12} md={12} >Chọn link affiliate theo:</Col>
        <Col className="mt-1">
          <CustomInput
            type="radio"
            id="linktype1"
            name="linktype"
            inline
            label="Email"
            defaultChecked
          />
          <CustomInput
          type="radio"
          id="linktype2"
          name="linktype"
          inline
          label="Số điện thoại"
        />
        <CustomInput
            type="radio"
            id="linktype3"
            name="linktype"
            inline
            label="Khác"
          />
        </Col>
        <Col lg={12} md={12} className="mt-1">
        <Button.Ripple color="primary" onClick={saveEdit} type='primary' danger>Lưu thay đổi</Button.Ripple>
        </Col>
        </Row>
        <div className="editLink__contentSelect">
          {
            user && <div className="editLink__contentSelect--groupInput">
              <Input onChange={onChangeInputSelect} placeholder="Nhập tên link bạn muồn thay đổi" style={{ display: valueSelect === 'khac' ? 'block' : 'none' }} />
            </div>
          }
        </div>
      </CardBody>
    </Card>
  )
}

export default EditLink
