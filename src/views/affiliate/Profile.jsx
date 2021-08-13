import React, { useEffect, useState } from 'react'
import InfoBank from '../../api/infoBank';
import { setLoading as setLoadingAction } from '../../redux/actions/myactions/userAction'
import { useDispatch } from 'react-redux';
import { Button, Card, CardBody } from 'reactstrap';
import { Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { CardTitle } from 'reactstrap';

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
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
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
    <Row className="profileBank">
      <Col lg={{size:8,offset:2}}>
      <Card>
        <CardTitle className="mt-2 mb-0 mx-2">Thông tin ngân hàng</CardTitle>
        <CardBody>
          {infoBank && (
          <div className="profileBank__content">
            <FormGroup>
              <Label for="disabledInput">Ngân hàng:</Label>
              <Input type="text" id="disabledInput" readOnly value={infoBank.bank_name} />
            </FormGroup>
            <FormGroup>
              <Label for="disabledInput">Chi nhánh:</Label>
              <Input type="text" id="disabledInput" readOnly value={infoBank.bank_branch} />
            </FormGroup>
            <FormGroup>
              <Label for="disabledInput">Chủ tài khoản:</Label>
              <Input type="text" id="disabledInput" readOnly value={infoBank.bank_account} />
            </FormGroup>
            <FormGroup>
              <Label for="disabledInput">Số tài khoản:</Label>
              <Input type="text" id="disabledInput" readOnly value={infoBank.bank_no} />
            </FormGroup>
          </div>
        )}
        <Row className="d-flex justify-content-center mx-0 mt-2"><Button className="w-100" color="primary" onClick={toggleModal}>Sửa</Button></Row>
        </CardBody>
      </Card>

      <Modal title="Sửa thông tin ngân hàng" visible={isModalVisible} onOk={handleOk} >
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
      <Modal
                  isOpen={isModalVisible}
                  toggle={toggleModal}
                  className="modal-dialog-centered"
                >
                  <ModalHeader toggle={toggleModal}>
                    Sửa thông tin ngân hàng
                  </ModalHeader>
                  <ModalBody>
                  {infoBank && (
                    <Form>
                    <FormGroup>
                      <Label for="bankname">Tên ngân hàng:</Label>
                      <Input
                        type="text"
                        id="bankname"
                        placeholder="Tên ngân hàng"
                        onChange={changeFormEdit}
                        defaultValue={infoBank.bank_name}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="branch">Chi nhánh:</Label>
                      <Input
                        type="text"
                        id="branch"
                        placeholder="Chi nhánh"
                        onChange={changeFormEdit} 
                        defaultValue={infoBank.bank_branch}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="owner">Chủ tài khoản:</Label>
                      <Input
                        type="text"
                        id="owner"
                        placeholder="Chủ tài khoản"
                        onChange={changeFormEdit} 
                        defaultValue={infoBank.bank_account}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="banknumber">Số tài khoản:</Label>
                      <Input
                        type="text"
                        id="banknumber"
                        placeholder="Số tài khoản"
                        onChange={changeFormEdit} 
                        defaultValue={infoBank.bank_no}
                      />
                    </FormGroup>
                    </Form>
                  )}
                  </ModalBody>
                  <ModalFooter>
                  <Button color="danger" onClick={() => {
                      toggleModal();
                    }}>
                      Hủy
                    </Button>{" "}
                    <Button color="primary" onClick={() => {
                      toggleModal();
                      handleOk();
                    }}>
                      Lưu
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
      </Col>
    </Row>
  )
}

export default Profile;
