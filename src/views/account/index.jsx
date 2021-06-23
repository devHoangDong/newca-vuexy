// import { Row, Col } from 'antd'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Link, Route, Switch, useRouteMatch
} from 'react-router-dom';
import userApi from '../../../api/userApi';
import DrawalMoney from './content/affiliate/DrawalMoney';
import BodyContent from './content/index';
import Title from './content/Title';
// import 'antd/dist/antd.css';
import MyMenu from './Menu/index';




// const { Search } = Input;
// const onSearch = value => console.log(value);


function Body() {
  const [mystyle, setMystyle] = useState({});
  const [toggle, setToggle] = useState(false);
  // //
  const load = useSelector(state => state.loading.isLoading);
  const [user, setUser] = useState(null)

  const fetchApi = async () => {
    const params = {
      email: "mr.tiennv@gmail.com"
    }
    const response = await userApi.getUsers(params)
    setUser(response)
    console.log(response);
  }

  useEffect(() => {
    fetchApi();
  }, [load])
  // //
  let { path, url } = useRouteMatch();
  console.log(url)
  const showMenu = () => {
    setToggle(!toggle);
    if (toggle) {
      setMystyle({
        visibility: 'visible',
        display: 'block'
      })
    } else {
      setMystyle({
        visibility: 'hidden',
        display: 'none'
      })
    }
  }


  return (
    <div className="bodyAccount">
      <Router>
        <MyMenu url={url} myst={mystyle} />
        <div className="bodyRight">
          <div className="topNav">
            <Title title={(!user) ? 'Xin chào khách' : 'Xin chào ' + user.name} />
            <div className="showMenu" onClick={showMenu} ><i class="fas fa-bars"></i></div>
            <div className="userAvatar">
              <div className="avatar">
                {/* <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="logo-mini"></img> */}
                <div className="userName">
                  <div className="userName__thumb"><i class="fas fa-user"></i></div>
                  <div className="thumb__editAccount">
                    <Link to={`${url}/editAccount`}>
                      <p>Sửa thông tin</p>
                    </Link>
                    <Link to={`${url}/editPassword`}>
                      <p>Đổi mật khẩu</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200, marginTop: '1rem', float: 'right', marginRight: '1rem' }} /> */}
          </div>
          <Switch>
            <Route component={BodyContent} path={path}></Route>
            <Route component={DrawalMoney} />
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default Body;
