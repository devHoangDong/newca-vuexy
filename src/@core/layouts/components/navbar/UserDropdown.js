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
import Swal from 'sweetalert2'


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
    history.push('/login')
  }
  const handleNavigation = (e, path) => {
    e.preventDefault()
    history.push(path)
  }
  // Confirm logout
  const handleConfirmText = (e) => {
    e.preventDefault()
    return Swal.fire({
      title: 'Đăng xuất!',
      text: 'Bạn có chắc mình muốn thoát?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xác nhận',
      cancelButtonText: 'Hủy',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout()
      }
    })
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
        {/* onClick={() => dispatch(handleLogout())} */}
        <DropdownItem tag={Link} to='/login' onClick={handleConfirmText}> 
          <Power size={14} className='mr-75' />
          <span className='align-middle'>Đăng xuất</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
