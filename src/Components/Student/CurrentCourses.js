import React, {Fragment, useState} from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {currentCoursesTable} from "./StudentTableAttributes";
import '../../components.css';
import makeKey from "../../utils/keyGenerator";

export default function CurrentCourses({courses : currentCourses, setCourses}) {
    console.log('in CurrentCourses');

    const [field, setField] = useState({
        subject: '',
        catalogNumber: '',
        courseTitle: '',
        units:''
    });

    const setInitialField = () => {
      setField({
          subject: '',
          catalogNumber: '',
          courseTitle: '',
          units:''
      })
    };

    const handleFieldChange = (event, attr) => {
        console.log(`In handleFieldChange ${event.target.value}`);
        let newField = { ...field };
        newField[attr] = event.target.value;
        console.log(`${JSON.stringify(newField)}`);
        setField(newField);
    }

    const addCourse = () => {
        console.log('addCourse called');
        let courses = currentCourses.slice();
        let newCourse = {
            ...field
        };
        console.log(`newCourse is: ${JSON.stringify(newCourse)}`);
        courses.push(newCourse);
        setCourses(courses);
        setInitialField();
    }

    return (
        <Fragment>
            <Box className='component-column'>
                <TableContainer component={Paper}>
                    <div><p className='table-title-center'>Current CS and Math Courses</p></div>
                    <Table sx={{minWidth: 650}} aria-label="current course table">
                        <CurrentCoursesTableHead/>
                        <CurrentCoursesTableBody
                            currentCourses={currentCourses}
                            setCourses={setCourses}
                        />
                    </Table>
                </TableContainer>
                <div><br/><br/><br/></div>
                <Box className='component-row'>
                    <TextField onChange={(e) => handleFieldChange(e, 'subject')}
                               value={field['subject']}
                               label="Subject"/>
                    <TextField onChange={(e) => handleFieldChange(e, 'catalogNumber')}
                               value={field['catalogNumber']}
                               label="Catalog Number"/>
                    <TextField onChange={(e) => handleFieldChange(e, 'courseTitle')}
                               value={field['courseTitle']}
                               label="Course Title"/>
                    <TextField onChange={(e) => handleFieldChange(e, 'units')}
                               value={field['units']}
                               label="Units"/>
                    <Button variant="outlined" onClick={addCourse}>Add Course</Button>
                </Box>
                <div><br/><br/><br/></div>
                <Button>Save & Submit</Button>
            </Box>
        </Fragment>
    )
}

function CurrentCoursesTableHead(){
    console.log('in CurrentCoursesTableHead');

    return (
        <Fragment>
            <TableHead>
                <TableRow key={makeKey}>
                    {
                        currentCoursesTable.map( attr =>
                            <TableCell key={makeKey()}>
                                {attr.attributeName}
                            </TableCell>
                        )
                    }
                    <TableCell key={makeKey()}>
                            Actions
                    </TableCell>
                </TableRow>
            </TableHead>
        </Fragment>
    );
}

function CurrentCoursesTableBody({currentCourses, setCourses}) {
    console.log('in CurrentCoursesTableBody');

    const [edit, setEdit] = useState(false);
    const [rowsToEdit, setRowsToEdit] = useState([]);

    const handleDelete = (courseIDx) => {
        let courses = currentCourses.slice();
        courses.splice(courseIDx, 1);
        setCourses(courses);
    };

    const handleEdit = (rowIdx) => {
        let rows = rowsToEdit.slice();
        rows[rowIdx] = true;
        setRowsToEdit(rows);
        setEdit(!edit);
    };

    return (
        <Fragment>
            <TableBody>
                {
                    currentCourses.map((course, rowIdx) =>
                       rowsToEdit[rowIdx] !== undefined && rowsToEdit[rowIdx] ? <CurrentCourseRowEditable
                               currentCourses = {currentCourses}
                               course={course}
                               setCourses={setCourses}
                               setEdit={setEdit}
                               rowIdx={rowIdx}
                               rowsToEdit={rowsToEdit}
                               setRowToEdit={setRowsToEdit}/> :
                                <CurrentCourseRowReadOnly
                                course={course}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                                rowIdx={rowIdx} />
                    )
                }
            </TableBody>
        </Fragment>
    );
}

function CurrentCourseRowReadOnly ({course, handleEdit, handleDelete, rowIdx}){
    console.log('in CurrentCoursesRow');

    return (
        <Fragment>
            <TableRow key={makeKey()}>
                {
                    currentCoursesTable.map((attr, colIdx) =>
                        <TableCell key={makeKey()}>
                            {course[attr.attributeCourseName]}
                        </TableCell>
                    )
                }
                <TableCell key={makeKey()}>
                    <Button onClick={() => handleEdit(rowIdx)}>Edit</Button>
                    <Button onClick={() => handleDelete(rowIdx)}>Delete</Button>
                </TableCell>
            </TableRow>
        </Fragment>
    )

}

function CurrentCourseRowEditable ({currentCourses, setCourses, course, rowsToEdit, setEdit, setRowToEdit, rowIdx}){
    console.log('in CurrentCoursesRowEditable');

    const [field, setField] = useState({ ...course });

    const handleFieldChange = (event, attr) => {
        console.log(`In handleFieldChange ${event.target.value}`);
        let newField = { ...field };
        newField[attr] = event.target.value;
        console.log(`${JSON.stringify(newField)}`);
        setField(newField);
    };

    const handleSave = (rowIdx) => {
        setEdit(false);
    };

    const handleCancel = (rowIdx) => {
        let rows = rowsToEdit.slice()
        rows[rowIdx] = false;
        setEdit(false);
        setRowToEdit(rows);
    };

    return (
        <Fragment>
            <TableRow key={makeKey()}>
                <TableCell key={makeKey()}>
                    <TextField
                        onChange={(e) => handleFieldChange(e, 'subject')}
                        value={field['subject']}
                        label="Subject"/>
                </TableCell>
                <TableCell key={makeKey()}>
                    <TextField onChange={(e) => handleFieldChange(e, 'catalogNumber')}
                               value={field['catalogNumber']}
                               label="Catalog Number"/>
                </TableCell>
                <TableCell key={makeKey()}>
                    <TextField onChange={(e) => handleFieldChange(e, 'courseTitle')}
                               value={field['courseTitle']}
                               label="Course Title"/>
                </TableCell>
                <TableCell key={makeKey()}>
                    <TextField onChange={(e) => handleFieldChange(e, 'units')}
                               value={field['units']}
                               label="Units"/>
                </TableCell>
                <TableCell key={makeKey()}>
                    <Button onClick={() => handleSave(rowIdx)}>Save</Button>
                    <Button onClick={() => handleCancel(rowIdx)}>Cancel</Button>
                </TableCell>

            </TableRow>
        </Fragment>
    )

}

