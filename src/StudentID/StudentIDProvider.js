import React, {createContext, useEffect, useReducer, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { DateTime } from 'luxon';

import API from "../API_Interface/API_Interface";

import studentIDReducers from './studentIDReducers';
import {fetchStudentID, fetchedStudentIDSuccess, fetchedStudentIDError} from './cycleIDActions'


const StudentIDContext = createContext();

let lastNCycleIDs = undefined;
const numCycleIDsToGet = 5;

const StudentIDProvider = ({user, children}) => {
    const [studentID, setStudentID] = useState(user?.student_id);
    const [state, dispatch] = useReducer(studentIDReducers, {loading: false, error: false});
    const {loading, error, errorMsg} = state;
    console.log(`In StudentIDProvider user is: ${JSON.stringify(user)}`);
    console.log(`In StudentIDProvider studentID is: ${JSON.stringify(studentID)}`);

    const ComponentToDisplay = ({children}) => {
        return <StudentIDContext.Provider value={{studentID: studentID, setStudentID: setStudentID}}>
                    {children}
                </StudentIDContext.Provider>
    };


    return (
        <React.Fragment>
            <ComponentToDisplay>
                {children}
            </ComponentToDisplay>
        </React.Fragment>
    );
};

export {StudentIDProvider, StudentIDContext}
