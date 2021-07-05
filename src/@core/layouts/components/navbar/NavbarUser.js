// ** Dropdowns Imports
import { Fragment } from 'react'

import UserDropdown from './UserDropdown'

// ** Third Party Components
import { Sun, Moon, Menu, Search, ShoppingCart, Bell} from 'react-feather'
import { NavItem, NavLink, Badge } from 'reactstrap'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <Fragment>
      <ul className='navbar-nav d-xl-none d-flex align-items-center'>
        <NavItem className='mobile-menu mr-auto'>
          <NavLink className='nav-menu-main menu-toggle hidden-xs is-active' onClick={() => setMenuVisibility(true)}>
            <Menu className='ficon' />
          </NavLink>
        </NavItem>
      </ul>
      <div className='bookmark-wrapper d-flex align-items-center'>
        <NavItem className='d-none d-lg-block'>
          <NavLink className='nav-link-style'>
            <ThemeToggler />
          </NavLink>
        </NavItem>
      </div>
      <ul className='nav navbar-nav align-items-center ml-auto'>
      <NavItem className="nav-search" >
          <NavLink className="nav-link-search">
            <ShoppingCart size={21} data-tour="search" />
            <Badge pill color="danger" className="badge-up">
              {" "}
              5{" "}
            </Badge>
          </NavLink>
          </NavItem>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <NavItem className="nav-search" >
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
  )
}
export default NavbarUser
