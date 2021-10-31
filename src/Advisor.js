import React, { useState, Fragment } from 'react';
import { Route, Router as ReactRouter, Switch,
    useRouteMatch, useLocation, useHistory} from 'react-router-dom';
import Login from './Login';
import App from './App';

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
                    //<CycleIDProvider>
                        <App user={user} logoutAction={logout(setUser)} />
                    //</CycleIDProvider>
                ) : (
                    <Login user={user} setUser={setUser} />
                )
            }
        </Fragment>
    )

}