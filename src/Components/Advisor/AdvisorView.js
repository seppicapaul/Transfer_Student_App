import React, {useState, useEffect, useContext, Fragment} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {flexbox} from '@mui/system';
import BaseCollapsibleTables from '../ComponentUtils/BaseCollapsibleTables'

import {transactionsAttributesForSingleBrand} from '../Transactions/transactionsTableAttributes';
import API from "../../API_Interface/API_Interface";
import {CycleIDContext} from '../../CycleID/CycleIDProvider';
import {useControlled} from "@mui/material";
import NewTransferStudents from "./NewTransferStudents";

export default function AdvisorView(props){
    return (
        <Fragment>
            {/*
            <Typography component="div" variant='h3'>
                Advisor View
            </Typography>
            */}
            <NewTransferStudents/>
        </Fragment>
    )
}
