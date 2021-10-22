import React, {useState, useEffect, useContext, Fragment} from 'react';
import Typography from '@mui/material/Typography';

import BaseCollapsibleTables from '../ComponentUtils/BaseCollapsibleTables'

import {transactionsAttributesForSingleBrand} from '../Transactions/transactionsTableAttributes';

import API from "../../API_Interface/API_Interface";
import {CycleIDContext} from '../../CycleID/CycleIDProvider';
import {useControlled} from "@mui/material";
import TransferStepper from '../Stepper/Stepper'
import VerticalLinearStepper from '../Stepper/VerticalStepper'

export default function Transactions(props) {

    const context = useContext(CycleIDContext);

    console.log(`Transactions using context: cycleID = ${JSON.stringify(context.cycleID)}`);

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if(! context.cycleID )
             return;

        const api = new API();

        async function getTransactions() {
            const transactionsJSONString = await api.transactionsForCycleWithID(context.cycleID.cycleID);
            console.log(`transactions from the DB ${JSON.stringify(transactionsJSONString)}`);
            setTransactions(transactionsJSONString.data);
        }
        getTransactions();
    }, []);

    return (
        <Fragment>
           <VerticalLinearStepper/>
        </Fragment>
    )
}


/*
* <BaseCollapsibleTables rows={transactions}
                                   tableSpecs={ {rowSpecs: transactionsAttributesForSingleBrand, collapsible: false } }
                                   component={null}
            />
            * */