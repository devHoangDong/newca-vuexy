// ** Dropdowns Imports
import { Fragment } from "react";
import classnames from "classnames";
import * as Icon from "react-feather";
import axios from "axios";

import UserDropdown from "./UserDropdown";

// ** Third Party Components
import { Sun, Moon, Menu, ShoppingCart, Bell } from "react-feather";
import {
  Row,
  Col,
  NavItem,
  NavLink,
  Badge,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { Button } from "reactstrap";
import { useState } from "react";
import { Search } from "react-feather";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Autocomplete from "../../../../components/@vuexy/autoComplete/AutoCompleteComponent";

const NavbarUser = (props) => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props;
  const [navbarSearch, setNavbarSearch] = useState(false);
  const [ballance, setBallance] = useState(0);
  const history = useHistory();
  const isDeposit = useSelector((state) => state.myreducers.deposit);
  let currentBallance = localStorage.getItem("ballance");
  const handleDeposit = () => {
    history.push("/deposit");
  };
  const handleNavbarSearch = () => {
    setNavbarSearch(!navbarSearch);
  };
  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === "dark") {
      return <Sun className="ficon" onClick={() => setSkin("light")} />;
    } else {
      return <Moon className="ficon" onClick={() => setSkin("dark")} />;
    }
  };
  const money = new Intl.NumberFormat("vi-VI", {
    style: "currency",
    currency: "VND",
  }).format(ballance);
  useEffect(() => {
    currentBallance = localStorage.getItem("ballance");
    !currentBallance
      ? axios.get("/ballance").then(function (response) {
        setBallance(response.data);
      })
      : setBallance(currentBallance);
  }, [isDeposit || currentBallance]);
  return (
    <Fragment>
      <ul className="navbar-nav d-xl-none d-flex align-items-center">
        <NavItem className="mobile-menu mr-auto">
          <NavLink
            className="nav-menu-main menu-toggle hidden-xs is-active"
            onClick={() => setMenuVisibility(true)}
          >
            <Menu className="ficon" />
          </NavLink>
        </NavItem>
      </ul>
      {/* <div
        className="bookmark-wrapper d-flex align-items-center"
        style={{ width: "37%" }}
      > */}
      <NavItem className="d-none d-lg-block">
        <NavLink className="nav-link-style">
          <ThemeToggler />
        </NavLink>
      </NavItem>
      {/* <div className="w-100">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Search width="18px" height="18px" />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Tìm kiếm" />
          </InputGroup>
        </div> */}
      {/* </div> */}
      <ul className="nav navbar-nav align-items-center ml-auto">
        <div className="mr-2 border-right pr-2 d-flex">
          <div className="d-flex flex-column mr-1">
            <div className="text-danger">
              Điểm thưởng: <span className="font-weight-bold">9999{"  "}</span>
            </div>
            <div className="text-danger">
              Số dư tài khoản: <span className="font-weight-bold">{money}</span>
            </div>
          </div>
          <Button.Ripple color="primary" onClick={handleDeposit}>
            Nạp tiền
          </Button.Ripple>
        </div>
        <NavItem className="nav-search">
          <NavLink className="nav-link-search" onClick={handleNavbarSearch}>
            <Icon.Search size={21} data-tour="search" />
          </NavLink>
          <div
            className={classnames("search-input", {
              open: navbarSearch,
              "d-none": navbarSearch === false,
            })}
          >
            <div className="search-input-icon">
              <Icon.Search size={17} className="primary" />
            </div>
            <Autocomplete
              className="form-control"
              suggestions={[]}
              filterKey="title"
              filterHeaderKey="groupTitle"
              grouped={true}
              placeholder="Tìm kiếm..."
              autoFocus={true}
              clearInput={navbarSearch}
              // externalClick={(e) => {
              //   setNavbarSearch(false);
              // }}
              onKeyDown={(e) => {
                if (e.keyCode === 27 || e.keyCode === 13) {
                  setNavbarSearch(false);
                  // props.handleAppOverlay("");
                }
              }}
              customRender={(
                item,
                i,
                filteredData,
                activeSuggestion,
                onSuggestionItemClick,
                onSuggestionItemHover
              ) => {
                const IconTag = Icon[item.icon ? item.icon : "X"];
                return (
                  <li
                    className={classnames("suggestion-item", {
                      active: filteredData.indexOf(item) === activeSuggestion,
                    })}
                    key={i}
                    onClick={(e) => onSuggestionItemClick(item.link, e)}
                    onMouseEnter={() =>
                      onSuggestionItemHover(filteredData.indexOf(item))
                    }
                  >
                    <div
                      className={classnames({
                        "d-flex justify-content-between align-items-center":
                          item.file || item.img,
                      })}
                    >
                      <div className="item-container d-flex">
                        {item.icon ? (
                          <IconTag size={17} />
                        ) : item.file ? (
                          <img
                            src={item.file}
                            height="36"
                            width="28"
                            alt={item.title}
                          />
                        ) : item.img ? (
                          <img
                            className="rounded-circle mt-25"
                            src={item.img}
                            height="28"
                            width="28"
                            alt={item.title}
                          />
                        ) : null}
                        <div className="item-info ml-1">
                          <p className="align-middle mb-0">{item.title}</p>
                          {item.by || item.email ? (
                            <small className="text-muted">
                              {item.by
                                ? item.by
                                : item.email
                                  ? item.email
                                  : null}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      {item.size || item.date ? (
                        <div className="meta-container">
                          <small className="text-muted">
                            {item.size
                              ? item.size
                              : item.date
                                ? item.date
                                : null}
                          </small>
                        </div>
                      ) : null}
                    </div>
                  </li>
                );
              }}
              onSuggestionsShown={(userInput) => {
                if (navbarSearch) {
                  // props.handleAppOverlay(userInput);
                }
              }}
            />
            <div className="search-input-close">
              <Icon.X
                size={24}
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarSearch(false);
                  // props.handleAppOverlay("");
                }}
              />
            </div>
          </div>
        </NavItem>
        <NavItem className="nav-search">
          <NavLink className="nav-link-search">
            <ShoppingCart size={21} data-tour="search" />
            <Badge pill color="danger" className="badge-up">
              {" "}
              5{" "}
            </Badge>
          </NavLink>
        </NavItem>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <NavItem className="nav-search">
          <NavLink className="nav-link-search">
            <Bell size={21} data-tour="search" />
            <Badge pill color="danger" className="badge-up">
              5
            </Badge>
          </NavLink>
        </NavItem>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <UserDropdown />
      </ul>
    </Fragment>
  );
};
export default NavbarUser;
