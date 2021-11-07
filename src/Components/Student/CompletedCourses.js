import React, {Fragment, useContext, useEffect, useState} from "react";
import Typography from "@mui/material/Typography";

import makeKey from '../../utils/keyGenerator';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import {completedCourseTables} from './StudentTableAttributes'
import '../../components.css';
import API from "../../API_Interface/API_Interface";
import {StudentIDContext} from '../../StudentID/StudentIDProvider'

let keyID = 0;

const nextKey = () => keyID++;

//const studentID = '003531053';

export default function CompletedCourses(props) {
    
    const [transfer, setTransfer] = useState([]);
    const [enrollment, setEnrollment] = useState([]);
    const [testCredit, setTestCredit] = useState([]);
    const [arrUpdate, setArrUpdate] = useState([]);
    console.log(`in CompletedCourses courses contains is ${JSON.stringify(transfer)}`);
    const studentIDContext = useContext(StudentIDContext);
    console.log(`studentIDContext contains: ${JSON.stringify(studentIDContext)}`);
    useEffect(() => {
        const api = new API();
        async function getCourses() {
            const studentID = studentIDContext.studentID;
            const transferJSONString = await api.transferCourses(studentID);
            const testCreditJSONString = await api.testCreditCourses(studentID);
            const enrollmentJSONString = await api.enrollment(studentID);
            const arrUpdateJSONString = await api.arrUpdateForm(studentID);
            console.log(`courses from the DB ${JSON.stringify(transferJSONString)}`);
            console.log(`courses from the DB ${JSON.stringify(testCreditJSONString)}`);
            console.log(`courses from the DB ${JSON.stringify(enrollmentJSONString)}`);
            console.log(`courses from the DB ${JSON.stringify(arrUpdateJSONString)}`);
            setTransfer(transferJSONString.data);
            setTestCredit(testCreditJSONString.data);
            setEnrollment(enrollmentJSONString.data);
            setArrUpdate(arrUpdateJSONString.data);
        }
        console.log(completedCourseTables[0]);
        getCourses();
    }, []);

    return <Fragment>
        <Box className='component-column'>
            <div>
                {
                    transfer.length > 0 &&
                    <div>
                        <TableContainer component={Paper}>
                            <Typography component="div" variant='h4'>
                                Transferred Courses
                            </Typography>
                            <Table sx={{minWidth: 650}} aria-label="transfer table">
                                <TableHead>
                                    <TableRow key={nextKey()}>
                                        {
                                            completedCourseTables[0].tableAttributes.map(attr => <TableCell key={nextKey()}
                                                                                                            align={attr.align}>{attr.attributeName}</TableCell>)
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {transfer.map((course) => (
                                        <TableRow
                                            key={nextKey()}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            {
                                                completedCourseTables[0].tableAttributes.map(attr => <TableCell key={nextKey()}
                                                                                                                align={attr.align}>{course[attr.attributeDBName]}</TableCell>)
                                            }
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                }
            </div>
            <div>
                {
                    testCredit.length > 0 &&
                    <div>
                        <TableContainer component={Paper}>
                            <Typography component="div" variant='h4'>
                                Test Credit
                            </Typography>
                            <Table sx={{minWidth: 650}} aria-label="test credit table">
                                <TableHead>
                                    <TableRow key={nextKey()}>
                                        {
                                            completedCourseTables[4].tableAttributes.map(attr => <TableCell key={nextKey()}
                                            align={attr.align}>{attr.attributeName}</TableCell>)
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {testCredit.map((course) => (
                                        <TableRow
                                            key={nextKey()}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                            {
                                                completedCourseTables[4].tableAttributes.map(attr => <TableCell key={nextKey()}
                                                align={attr.align}>{course[attr.attributeDBName]}</TableCell>)
                                            }
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                }
            </div>
            <div>
                {
                    enrollment.length > 0 &&
                    <div>
                        <TableContainer component={Paper}>
                            <Typography component="div" variant='h4'>
                                SSU Courses
                            </Typography>
                            <Table sx={{minWidth: 650}} aria-label="enrollment table">

                                <TableHead>
                                    <TableRow key={nextKey()}>
                                        {
                                            completedCourseTables[2].tableAttributes.map(attr => <TableCell
                                                key={nextKey()}
                                                align={attr.align}>{attr.attributeName}</TableCell>)
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {enrollment.map((course) => (
                                        <TableRow
                                            key={nextKey()}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            {
                                                completedCourseTables[2].tableAttributes.map(attr => <TableCell
                                                    key={nextKey()}
                                                    align={attr.align}>{course[attr.attributeDBName]}</TableCell>)
                                            }
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                }
            </div>
            <div>
                {
                    arrUpdate.length > 0 &&
                    <div>
                        <TableContainer component={Paper}>
                            <Typography component="div" variant='h4'>
                                ARR Update Form
                            </Typography>
                            <Table sx={{minWidth: 650}} aria-label="ARR table">

                                <TableHead>
                                    <TableRow key={nextKey()}>
                                        {
                                            completedCourseTables[3].tableAttributes.map(attr => <TableCell key={nextKey()}
                                                                                                            align={attr.align}>{attr.attributeName}</TableCell>)
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {arrUpdate.map((course) => (
                                        <TableRow
                                            key={nextKey()}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            {
                                                completedCourseTables[3].tableAttributes.map(attr => <TableCell key={nextKey()}
                                                                                                                align={attr.align}>{course[attr.attributeDBName]}</TableCell>)
                                            }
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                }
            </div>
        </Box>
    </Fragment>


    /*
    return (
        <Fragment>
            <Typography component="div" variant='h3'>
                Completed Courses
            </Typography>
            <Box className='component-column'>
            {
                completedCourseTables.map((table) =>
                    <TableContainer component={Paper}>
                        <CourseTable title={table.tableName} attributes={table.tableAttributes}/>
                    </TableContainer>)
            }
            </Box>
        </Fragment>
    )*/
}
/*
function CourseTable({data, title, attributes}){
    return (
        <Fragment>
            <TableHead>
                <TableRow key={makeKey()}>
                    {
                        attributes.map( (attr) =>
                        <TableCell key={makeKey()}>
                            {attr.attributeName}
                        </TableCell>
                        )

                    }

                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((course) => (
                    <TableRow
                        key={nextKey()}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        {
                            attributes.map(attr => <TableCell key={nextKey()}
                                                                         align={attr.align}>{course[attr.attributeDBName]}</TableCell>)
                        }
                    </TableRow>
                ))}
            </TableBody>
        </Fragment>
    )
}
*/