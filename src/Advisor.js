import React, { useState, Fragment } from 'react';
import { Route, Router as ReactRouter, Switch,
    useRouteMatch, useLocation, useHistory} from 'react-router-dom';
import Login from './advisorLogin';
import App from './advisorApp';

import {CycleIDProvider} from './CycleID/CycleIDProvider';

const logout = (setUser) => {
    return () => {
        setUser(undefined);
    }
};

export default function Main() {

    const [user, setUser] = useState(undefined);

    return (
        <Fragment>
            {
                user !== undefined ? (
                    <App user={user} logoutAction={logout(setUser)} />
                ) : (
                    <Login user={user} setUser={setUser} />
                )
            }
        </Fragment>
    )

}