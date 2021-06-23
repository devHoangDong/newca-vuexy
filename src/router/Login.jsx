import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


const Login = ({ component: Component, ...rest }) => {

    const loginState = useSelector(store => store.login.isLogin)
    return (
        <div>
            <Route {...rest} render={props => (
                !loginState ?
                    (<Component {...props} />) :
                    (<Redirect to="/" />)
            )} />
        </div>
    );
};

export default Login;
