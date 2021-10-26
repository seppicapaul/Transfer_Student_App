import React, {Fragment} from "react";
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
import {completedCourseTables}from './StudentTableAttributes'
import '../../components.css';


export default function CompletedCourses(props) {
    return (
        <Fragment>
            <Box className='component-column'>
            {
                completedCourseTables.map((table) =>
                    <TableContainer component={Paper}>
                        <CourseTable title={table.tableName} attributes={table.tableAttributes}/>
                    </TableContainer>)
            }
            </Box>
        </Fragment>
    )
}

function CourseTable({title, attributes}){
    return (
        <Fragment>
            <div><p className='table-title-center' >{`${title}`}</p></div>
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
        </Fragment>
    )
}
