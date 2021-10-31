/*
import React, { useState, Fragment } from 'react';
import { Route, Router as ReactRouter, Switch, Link, useRouteMatch, useLocation, useHistory} from 'react-router-dom';
import Login from './Login';
import App from './App';

import {CycleIDProvider} from './CycleID/CycleIDProvider';

import Student from './Student';
import Advisor from './Advisor';

export default function Main() {

    let match = useRouteMatch();
    let location = useLocation();
    let history = useHistory();

    return (
        <Fragment>
            <nav>
                <ul>
                    <li>
                        <Link to='/student'>
                            Student
                        </Link>
                    </li>
                    <li>
                        <Link to='/advisor'>
                            Advisor
                        </Link>
                    </li>
                </ul>
            </nav>
             <Switch>
                 <Route path='/student'>
                     <Student/>
                 </Route>
                 <Route path='/advisor'>
                     <Advisor/>
                 </Route>
             </Switch>
        </Fragment>
    )

}
*/

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
