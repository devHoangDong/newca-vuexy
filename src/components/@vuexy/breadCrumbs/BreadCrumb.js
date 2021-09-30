import React from "react"
import { ArrowLeft } from "react-feather"
import { NavLink, useHistory } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  DropdownToggle, UncontrolledButtonDropdown
} from "reactstrap"
import vertical from '../../../navigation/vertical'

const BreadCrumbs = (props) => {
  const onGetLink = (title) => {
    for (let i = 0; i < vertical.length; i++) {
      if (title === vertical[i].title) {
        return vertical[i].navLink
      }
    }
  }
  const history = useHistory()
  return (
    <div className="content-header row">
      <div className="content-header-left col-md-10 col-10 mb-md-2 mb-0">
        <div className="row breadcrumbs-top col-12 px-0">
          <div className="col-12 d-md-flex d-lg-block flex-md-column">
            {props.breadCrumbTitle ? (
              <h2 className="content-header-title float-left mb-0">
                {props.breadCrumbTitle}
              </h2>
            ) : (
              ""
            )}
            <div className="breadcrumb-wrapper vx-breadcrumbs d-sm-block col-12 mt-lg-0 pl-0 mt-2">
              <Breadcrumb tag="ol" className="pl-0">
                <BreadcrumbItem tag="li">
                  <NavLink className="text-primary" to="/">
                    Trang chủ
                    </NavLink>
                </BreadcrumbItem>
                {props.breadCrumbParent && <BreadcrumbItem tag="li" className="text-primary">
                  <NavLink className="text-primary" to={onGetLink(props.breadCrumbParent)}>
                    {props.breadCrumbParent}
                  </NavLink>
                </BreadcrumbItem>}
                {props.breadCrumbParent2 ? (
                  <BreadcrumbItem tag="li" className="text-primary">
                    <NavLink className="text-primary" to="/manage-cts">
                      {props.breadCrumbParent2}
                    </NavLink>
                  </BreadcrumbItem>
                ) : (
                  ""
                )}
                {props.breadCrumbParent3 ? (
                  <BreadcrumbItem tag="li" className="text-primary">
                    {props.breadCrumbParent3}
                  </BreadcrumbItem>
                ) : (
                  ""
                )}
                <BreadcrumbItem tag="li" active>
                  {props.breadCrumbActive}
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
      <div className="content-header-right text-md-right col-md-2 col-2 d-md-block">
        <div className="form-group breadcrum-right dropdown col-lg-0 col-12 px-0">
          <UncontrolledButtonDropdown className="float-right">
            <DropdownToggle
              color="primary"
              size="sm"
              onClick={() => history.goBack()}
              className="btn-icon btn-round dropdown-toggle"
            >
              <ArrowLeft
                size={14}
                style={{
                  left: 0
                }}
              /><span className="d-none d-md-inline">Quay lại</span>
            </DropdownToggle>
            {/* <DropdownMenu tag="ul" right>
                <Button></Button>
                <DropdownItem tag="li">
                  <NavLink className="text-dark w-100" to="/chat">
                    Chat
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="li">
                  <NavLink className="text-dark w-100" to="/email/inbox">
                    Email
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="li">
                  <NavLink className="text-dark w-100" to="/calendar">
                    Calendar
                  </NavLink>
                </DropdownItem>
              </DropdownMenu> */}
          </UncontrolledButtonDropdown>
        </div>
      </div>
    </div>
  )
}
export default BreadCrumbs
