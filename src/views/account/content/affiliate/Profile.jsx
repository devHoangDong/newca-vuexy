import React, { useEffect, useState } from 'react'
import { Card, Button, Modal, Form, Input } from 'antd';
import '../../../../../scss/affiliateProfile.scss';
import InfoBank from '../../../../../api/infoBank';
import { setLoading as setLoadingAction } from '../../../../../redux/action/userAction'
import { useDispatch } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch()
  const [infoBank, setInfoBank] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchInfoBank = async () => {
    const params = {
      email: "mr.tiennv@gmail.com"
    }
    const response = await InfoBank.getBankInfo(params)
    setInfoBank(response[0].affiliate_banks[0]);
  }

  useEffect(() => {
    fetchInfoBank();
  }, [])
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const changeFormEdit = (event) => {
    setInfoBank({
      ...infoBank,
      [event.target.name]: event.target.value
    })
  }

  const submitBank = async () => {
    const params = {
      email: "mr.tiennv@gmail.com",
      bank_name: infoBank.bank_name,
      bank_branch: infoBank.bank_branch,
      bank_account: infoBank.bank_account,
      bank_no: infoBank.bank_no
    }

    const response = await InfoBank.updateBankInfo(params)
    return response
  }
  const handleOk = () => {
    submitBank()
    dispatch(setLoadingAction(true))
    setIsModalVisible(false)
    setTimeout(() => {
      dispatch(setLoadingAction(false))
    }, 3000);

  };
  return (
    <div className="profileBank">

      <Card
        title="Thông Tin Ngân Hàng "
        extra={<Button type="primary"
        style={{ width: 100, borderRadius: 10 }}
        onClick={showModal}
      >sửa</Button>} >
        {infoBank && (
          <div className="profileBank__content">
            <p><i className="fas fa-university"></i> Ngân hàng: <span>{infoBank.bank_name}</span></p>
            <p><i className="fas fa-code-branch"></i> Chi nhánh: <span>{infoBank.bank_branch}</span></p>
            <p><i className="fas fa-user"></i> Chủ tài khoản: <span>{infoBank.bank_account}</span></p>
            <p><i className="fas fa-credit-card"></i> Số tài khoản: <span>{infoBank.bank_no}</span></p>
          </div>
        )}
      </Card>

      <Modal title="Sửa thông tin ngân hàng" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="profileBank__content__fromEdit">
          {infoBank && (
            <Form name="infoBank">
              <Form.Item
                name="bank_name"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <label><i className="fas fa-university"></i> Tên ngân hàng</label>
                <Input name="bank_name" onChange={changeFormEdit} value={infoBank.bank_name}/>
              </Form.Item>

              <Form.Item
                name="bank_branch"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <label><i className="fas fa-code-branch"></i> Chi nhánh </label>
                <Input name="bank_branch" onChange={changeFormEdit} value={infoBank.bank_branch}/>
              </Form.Item>

              <Form.Item
                name="bank_account"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <label><i className="fas fa-user"></i> chủ tài khoản </label>
                <Input name="bank_account" onChange={changeFormEdit} value={infoBank.bank_account}/>
              </Form.Item>

              <Form.Item
                name="bank_no"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <label><i className="fas fa-credit-card"></i> số tài khoản </label>
                <Input name="bank_no" onChange={changeFormEdit} value={infoBank.bank_no}/>
              </Form.Item>
            </Form>
          )}
        </div>
      </Modal>
    </div>
  )
}

export default Profile;
