import React, { useState, useEffect } from 'react';
import { message, Input, Button, Radio } from 'antd';
import '../../../../../scss/editLink.scss';
import userApi from '../../../../../api/userApi';
import affiliateApi from '../../../../../api/affiliateApi';
import { setLoading as setLoadingAction } from '../../../../../redux/action/userAction'
import { useDispatch } from 'react-redux';


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
    <div className="editLink__container">
      <div className="editLink">
        <div className="editLink__link">
          <Input value={valueLink} disabled />
          <Button>copy link</Button>
        </div>
        <div className="editLink__title">Chọn link affiliate theo:</div>
        <div className="editLink__groupSelection">
          <Radio.Group
            options={optionsSelection}
            onChange={onChangeSelection}
            value={valueSelect}
            optionType="button"
            buttonStyle="solid"
          />
          <Button onClick={saveEdit} type='primary' danger>Lưu thay đổi</Button>
        </div>
        <div className="editLink__contentSelect">
          {
            user && <div className="editLink__contentSelect--groupInput">
              <Input onChange={onChangeInputSelect} placeholder="Nhập tên link bạn muồn thay đổi" style={{ display: valueSelect === 'khac' ? 'block' : 'none' }} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default EditLink
