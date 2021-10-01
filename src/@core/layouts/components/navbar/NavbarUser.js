// ** Dropdowns Imports
import axios from "axios";
import classnames from "classnames";
import { Fragment, useEffect, useState } from "react";
import * as Icon from "react-feather";
// ** Third Party Components
import { Bell, Menu, Moon, ShoppingCart, Sun } from "react-feather";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Badge, Button, NavItem,
  NavLink
} from "reactstrap";
import UserDropdown from "./UserDropdown";
import { DropdownMenu } from 'reactstrap';
import { DropdownToggle } from 'reactstrap';
import { UncontrolledDropdown } from 'reactstrap';
import Autocomplete from '../../../components/autocomplete/index';



const NavbarUser = (props) => {
  // ** Props
  const [suggestion, setSuggestion] = useState({});
  const { skin, setSkin, setMenuVisibility } = props;
  const [navbarSearch, setNavbarSearch] = useState(false);
  const [ballance, setBallance] = useState(0);
  const history = useHistory();
  const isDeposit = useSelector((state) => state.myreducers.deposit);
  let currentBallance = localStorage.getItem("ballance");
  const handleDeposit = () => {
    history.push("/deposit");
  };
  const fetchData = () => {
    axios.get('/api/main-search/data').then(({ data }) => {
      console.log(data.searchResult, 'data')
      setSuggestion(data.searchResult);
      // this.setState({ suggestions: data.searchResult });
    });
  }
  const handleNavbarSearch = () => {
    console.log(navbarSearch, 'navbarSearch')
    setNavbarSearch(true);
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
    fetchData();
  }, [])
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
        <div className="mr-2 border-right pr-2 d-md-flex d-sm-none d-none">
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
        <NavItem className="nav-search" onClick={handleNavbarSearch}>
          <NavLink className="nav-link-search">
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
              suggestions={suggestion}
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
        <NavItem className="d-md-none">
          <NavLink>
            <Icon.CreditCard size={21} onClick={handleDeposit} />
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          className="dropdown-notification nav-item"
          tag="li"
        >
          <DropdownToggle
            tag="a"
            data-toggle="dropdown"
            aria-expanded={false}
            className="nav-link nav-link-label"
          >
            <ShoppingCart size={21} data-tour="search" />
            <Badge pill color="danger" className="badge-up">
              {" "}
              5{" "}
            </Badge>
          </DropdownToggle>
          <DropdownMenu
            tag="ul"
            right
            className="dropdown-menu-media"
          >
            <li className="dropdown-menu-header">
              <div className="dropdown-header mt-0">
                <h3 className="text-white">5 New</h3>
                <span className="notification-title">
                  No Items
                </span>
              </div>
            </li>
            <li className="dropdown-menu-footer">
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <UncontrolledDropdown
          className="dropdown-notification nav-item"
          tag="li"
        >
          <DropdownToggle
            tag="a"
            data-toggle="dropdown"
            aria-expanded={false}
            className="nav-link nav-link-label"
          >
            <Bell size={21} />
            <Badge pill color="danger" className="badge-up">
              {" "}
              5{" "}
            </Badge>
          </DropdownToggle>
          <DropdownMenu
            tag="ul"
            right
            className="dropdown-menu-media"
          >
            <li className="dropdown-menu-header">
              <div className="dropdown-header mt-0">
                <h3 className="text-white">5 New</h3>
                <span className="notification-title">
                  No Notifications
                </span>
              </div>
            </li>
            <li className="dropdown-menu-footer">
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <UserDropdown />
      </ul>
    </Fragment>
  );
};
export default NavbarUser;
