import React, {Fragment, useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import API from "../../API_Interface/API_Interface";

import BaseCollapsibleTables from '../ComponentUtils/BaseCollapsibleTables'
import AccountsForEntity from "./AccountsForEntity";
import routesTableAttributes from '../Routes/routesTableAttributes';
import {matchesPattern} from "@babel/types";

export default function AccountsByRoutes(props) {

    const [routes, setRoutes] = useState([]);
    const [routesToDisplay, setRoutesToDisplay] = useState(routes);

    const idAttribute = 'routeID';

    useEffect(() => {
        const api = new API();

        async function getRoutes() {
            const routesJSONString = await api.allRoutes();
            // console.log(`routes from the DB ${JSON.stringify(routesJSONString)}`);
            setRoutes(routesJSONString.data);
            setRoutesToDisplay(routesJSONString.data);
        }

        getRoutes();
    }, []);

    const makeRoutesForAccountComponent = (row) => {
        return  <AccountsForEntity routeID={row["routeID"]} collapsible={false} />
    };

    const filterRows = (changeEvent) => {
        if(routes.length === 0 || changeEvent.target.value.trim().length === 0) {
            setRoutesToDisplay(routes);
            return;
        }

        const pattern = changeEvent.target.value.trim().toLocaleLowerCase();
        const rows = routes.filter(route => route['routeName'].toLowerCase().match(pattern) );
        setRoutesToDisplay(rows);
    };

    return (
        <Fragment>
            <BaseCollapsibleTables rows={routesToDisplay}
                                   tableSpecs={ {rowSpecs: routesTableAttributes, collapsible: true } }
                                   component={makeRoutesForAccountComponent}
                                   idAttribute={idAttribute}
                                   searchBarInfo={{
                                       placeholder: 'Filter by route name',
                                       inputChangeHandler: filterRows
                                   }}
            />
        </Fragment>
    )
}
