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
import '../../components.css';

const newTransferStudentsAttributes = [
    {
        attributeName: 'Last Name',
        attributeDBName: 'student_lName'
    },
    {
        attributeName: 'First Name',
        attributeDBName: 'student_fName'
    },
    {
        attributeName: 'Student ID',
        attributeDBName: 'student_id'
    }
];

export default function NewTransferStudents(props) {
    return(
        <Fragment>
            <Box className='component-column'>
            {
                <TableContainer component={Paper}>
                    <div><p className='table-title-center' >{`New Transfer Students`}</p></div>
                    <TableHead>
                        <TableRow key={makeKey()}>
                            {
                                newTransferStudentsAttributes.map( (attr) =>
                                    <TableCell key={makeKey()}>
                                        {attr.attributeName}
                                    </TableCell>
                                )
                            }
                        </TableRow>
                    </TableHead>
                </TableContainer>
            }
            </Box>
        </Fragment>
    )
}
