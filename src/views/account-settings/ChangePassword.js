import React from "react"
import { Button, FormGroup, Row, Col } from "reactstrap"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
const formSchema = Yup.object().shape({
  oldpass: Yup.string().required("Required"),
  newpass: Yup.string().required("Required"),
  confirmpass: Yup.string()
    .oneOf([Yup.ref("newpass"), null], "Passwords must match")
    .required("Required")
})
class ChangePassword extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className="pt-1">
          <Col sm="12">
            <Formik
              initialValues={{
                oldpass: "",
                newpass: "",
                confirmpass: ""
              }}
              validationSchema={formSchema}
            >
              {({ errors, touched }) => (
                <Form>
                  <FormGroup>
                    <Field
                      name="oldpass"
                      id="oldpass"
                      className={`form-control ${errors.oldpass &&
                        touched.oldpass &&
                        "is-invalid"}`}
                      placeholder="Mật khẩu cũ"
                    />
                    {errors.oldpass && touched.oldpass ? (
                      <div className="text-danger">{errors.oldpass}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Field
                      name="newpass"
                      placeholder="Mật khẩu mới"
                      id="newpass"
                      className={`form-control ${errors.newpass &&
                        touched.newpass &&
                        "is-invalid"}`}
                    />
                    {errors.newpass && touched.newpass ? (
                      <div className="text-danger">{errors.newpass}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Field
                      name="confirmpass"
                      id="confirmpass"
                      className={`form-control ${errors.confirmpass &&
                        touched.confirmpass &&
                        "is-invalid"}`}
                      placeholder="Xác nhận mật khẩu"
                    />
                    {errors.confirmpass && touched.confirmpass ? (
                      <div className="text-danger">{errors.confirmpass}</div>
                    ) : null}
                  </FormGroup>
                  <div className="d-flex justify-content-start flex-wrap">
                    <Button.Ripple
                      className="mr-50"
                      color="primary"
                      type="submit"
                    >
                      Lưu
                    </Button.Ripple>
                    <Button.Ripple type="submit" color="danger">
                      Hủy
              </Button.Ripple>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default ChangePassword
