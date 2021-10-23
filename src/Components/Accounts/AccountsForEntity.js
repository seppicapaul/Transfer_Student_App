import React, {useState, useEffect, Fragment} from 'react';
import API from "../../API_Interface/API_Interface";

import BaseCollapsibleTables from '../ComponentUtils/BaseCollapsibleTables';
import accountsTableAttributes from './accountsTableAttributes';


const AccountsForEntity = ({marketID, routeID, collapsible = false}) => {

    const [accountsForRoute, setAccountsForRoute] = useState([]);

    useEffect(() => {
        const api = new API();

        async function getRoutes() {
            const routesJSONString = await api.accountsForRoute(routeID);
            console.log(`accounts for routeID ${routeID} from the DB ${JSON.stringify(routesJSONString)}`);
            setAccountsForRoute(routesJSONString.data);
        }

        getRoutes();
    }, []);


    return <Fragment>
        {
            accountsForRoute.length > 0 && <BaseCollapsibleTables rows={accountsForRoute}
                                                                  tableSpecs={ {rowSpecs: accountsTableAttributes,
                                                                                collapsible: collapsible } } />
        }
    </Fragment>
};

export default AccountsForEntity;
