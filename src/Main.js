
import React, { useState, Fragment } from 'react';
import { Route, Router as ReactRouter, Switch, Link, useRouteMatch, useLocation, useHistory} from 'react-router-dom';
import Login from './Login';
import App from './App';

import {CycleIDProvider} from './CycleID/CycleIDProvider';

import Transactions from './Components/Transactions/Transactions';
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
                     <Transactions/>
                 </Route>
                 <Route path='/advisor'>
                     <Advisor/>
                 </Route>
             </Switch>
        </Fragment>
    )

}