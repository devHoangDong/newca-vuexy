import React from 'react';
import { isUserLoggedIn } from '@utils'
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <div>
            <Route {...rest} render={props => (
                isUserLoggedIn() ?
                    (<Component {...props} />) :
                    <Redirect to="/login" />
            )} />
        </div>
    );
};

export default PrivateRoute;