// ** React Imports
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
// import { handleLogout } from '@store/actions/auth'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatardefault.svg'
import { useHistory } from 'react-router-dom';

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const history = useHistory()
  // ** State
  const [userData, setUserData] = useState(null)

  const handleLogout = () => {
    setUserData(null)
    localStorage.clear();
  }
  const handleNavigation = (e, path) => {
    e.preventDefault()
    history.push(path)
  }
  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn) {
      const userGoG = JSON.parse(localStorage.getItem('userData'))
      const userToken = JSON.parse(localStorage.getItem('userToken'))
      if (userGoG) { setUserData(userGoG)} 
      else {
        setUserData(userToken)
      }
    }
  }, [])

  //** Vars
  const userAvatar = (userData && userData.imageUrl) || defaultAvatar
  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name font-weight-bold'>{(userData && userData.name) || 'Khách'}</span>
          <span className='user-status'>{(userData && userData.role) || 'Admin'}</span>
        </div>
        <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} to='/account' onClick={e => handleNavigation(e, "/account")}>
          <User size={14} className='mr-75' />
          <span className='align-middle'>Tài khoản</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='#' onClick={e => e.preventDefault()}>
          <Mail size={14} className='mr-75' />
          <span className='align-middle'>Đơn hàng</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='#' onClick={e => e.preventDefault()}>
          <CheckSquare size={14} className='mr-75' />
          <span className='align-middle'>Tích điểm</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='#' onClick={e => e.preventDefault()}>
          <MessageSquare size={14} className='mr-75' />
          <span className='align-middle'>Đơn yêu cầu</span>
        </DropdownItem>
        {/* onClick={() => dispatch(handleLogout())} */}
        <DropdownItem tag={Link} to='/login' onClick={handleLogout}> 
          <Power size={14} className='mr-75' />
          <span className='align-middle'>Đăng xuất</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
