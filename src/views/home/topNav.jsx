import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { format } from 'date-fns';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useGoogleAuth } from '../../../GoogleAuthen';
import { login } from '../../../redux/action/login';
import '../../assets/scss/topnav.scss';
import { ShoppingCart, User, Package, Bell, Gift, Mail, LogOut, Search as SearchIco, MessageSquare, CheckSquare, Calendar, Star } from "react-feather";
import Flags from 'country-flag-icons/react/3x2'

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

const d = format(new Date(), 'do MMMM yyyy')

export default function TopNav() {

  const history = useHistory();
  const dispatch = useDispatch()
  const EditAccount = () => {
    history.push('/account/editAccount')
  }
  const Cart = () => {
    history.push('/dathang')
  }
  const Affiliate = () => {
    history.push('//account/affiliate')
  }
  const EditPassword = () => {
    history.push('/account/editPassword')
  }
  const { signOut } = useGoogleAuth();

  let username = '';
  let avatar = '';
  const userGG = JSON.parse(localStorage.getItem('userGG'));
  const userToken = JSON.parse(localStorage.getItem('userToken'));
  if (userGG) {
    username = `${userGG.profileObj.givenName} ${userGG.profileObj.familyName}`;
    avatar = userGG.profileObj.imageUrl;
  } else {
    if (userToken) {
      username = userToken.name;
      avatar = 'http://simpleicon.com/wp-content/uploads/user1.svg'
    }
  }

  const handleSignOut = () => {
    signOut();
    dispatch(login(false))
    localStorage.clear();
  }

  const listCart = useSelector(store => store.Cart)
  return (
    <div className="topNav">
      <div className="topNav__left">
        {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
        <div className="topNav__left__cart"><Mail size={18} color={'#6e6b7b'} /></div>
        <div className="topNav__left__cart"><MessageSquare size={18} color={'#6e6b7b'} /></div>
        <div className="topNav__left__cart"><CheckSquare size={18} color={'#6e6b7b'} /></div>
        <div className="topNav__left__cart"><Calendar size={18} color={'#6e6b7b'} /></div>
        <div className="topNav__left__cart"><Star size={18} color={"orange"} /></div>
      </div>
      <div className="topNav__right">
        <div className="topNav__right__noti">
          <div className="topNav__right__noti__language">
            <Flags.VN title="United States" /><div>Tiếng Việt</div>
          </div>
          <div className="topNav__right__search">
            <SearchIco size={18} color={'#6e6b7b'} />
          </div>
          <div className="topNav__right__bell">
            <Bell size={18} color={'#6e6b7b'} /><span className="icon-cart bg-color white total_items">{listCart ? listCart.length : '0'}</span>
          </div>
          <div className="topNav__right__cart">
            <ShoppingCart size={18} color={'#6e6b7b'} /><span className="icon-cart bg-color white total_items">{listCart ? listCart.length : '0'}</span>
          </div>
        </div>
        <div className="topNav__right__avatar">
          <div className="userAvatar">
            <img src={avatar} alt="ava"></img>
          </div>
          <div className="thumb__editAccount">
            <div className="thumb__editAccount__subMenu" onClick={() => EditAccount()}><User size={16} />&nbsp;&nbsp;Thông tin tài khoản</div>
            <div className="thumb__editAccount__subMenu" onClick={() => ""}><Package size={16} />&nbsp;&nbsp;Đơn hàng của tôi</div>
            <div className="thumb__editAccount__subMenu" onClick={() => EditAccount()}><Bell size={16} />&nbsp;&nbsp;Thông báo của tôi</div>
            <div className="thumb__editAccount__subMenu" onClick={() => ""}><Gift size={16} />&nbsp;&nbsp;Tích điểm</div>
            <div className="thumb__editAccount__subMenu" onClick={() => EditPassword()}><Mail size={16} />&nbsp;&nbsp;Đơn yêu cầu của tôi</div>
            <div className="thumb__editAccount__subMenu" onClick={() => handleSignOut()}><LogOut size={16} />&nbsp;&nbsp;Đăng xuất</div>
          </div>
          <div className="topNav__right__userName">
            <div className="userName__thumb">
              <div className="userName__thumb__name" >{username}</div>
              <div className="userName__thumb__role" >admin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



