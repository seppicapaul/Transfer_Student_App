import React, {Fragment, useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
<<<<<<< Updated upstream
=======
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

let keyID = 0;

const nextKey = () => keyID++;
>>>>>>> Stashed changes

export default function CompletedCourses(props) {
    
    const [transfer, setTransfer] = useState([]);
    const [enrollment, setEnrollment] = useState([]);
    const [testCredit, setTestCredit] = useState([]);
    const [arrUpdate, setArrUpdate] = useState([]);
    console.log(`in RouteTable routes contains is ${JSON.stringify(transfer)}`);

    useEffect(() => {
        const api = new API();

        async function getCourses() {
            const transferJSONString = await api.transferCourses('003531053');
            const testCreditJSONString = await api.testCreditCourses('003531053');
            const enrollmentJSONString = await api.enrollment('003531053');
            const arrUpdateJSONString = await api.arrUpdateForm('003531053');
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
        <Fragment>
            {
                transfer.length > 0 &&
                    <TableContainer component={Paper}>
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
            }
        </Fragment>
        <Fragment>
            {
                testCredit.length > 0 &&
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="transfer table">
                        <TableHead>
                            <TableRow key={nextKey()}>
                                {
                                    completedCourseTables[4].tableAttributes.map(attr => <TableCell key={nextKey()}
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
                                        completedCourseTables[4].tableAttributes.map(attr => <TableCell key={nextKey()}
                                                                                                        align={attr.align}>{course[attr.attributeDBName]}</TableCell>)
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </Fragment>
    </Fragment>


    /*
    return (
        <Fragment>
<<<<<<< Updated upstream
            <Typography component="div" variant='h3'>
                Completed Courses
            </Typography>
=======
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
>>>>>>> Stashed changes
        </Fragment>
    )
}
