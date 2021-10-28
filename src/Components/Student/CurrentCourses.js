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
    //const [currentCourses, setCourses] = useState([])
    const [subject, setSubject] = useState('');
    const [catalogNumber, setCatalogNumber] = useState('');
    const [courseTitle, setCourseTitle] = useState('');
    const [units, setUnits] = useState('');

    const handleSubject = event => {
        console.log('handleSubject called');
        setSubject(event.target.value);
    };

    const handleCatalogNumber = event => {
        console.log('handleSubject called');
        setCatalogNumber(event.target.value);
    };

    const handleCourseTitle = event => {
        console.log('handleCourseTitle called');
        setCourseTitle(event.target.value);
    };

    const handleUnits = event => {
        console.log('handleUnits called');
        setUnits(event.target.value);
    };

    const addCourse = () => {
        console.log('addCourse called');

        let courses = currentCourses.slice();

        let newCourse = {
            subject: subject,
            catalogNumber: catalogNumber,
            courseTitle: courseTitle,
            units: units
        };

        console.log(`newCourse is: ${JSON.stringify(newCourse)}`);
        courses.push(newCourse);
        setCourses(courses);

        setSubject('');
        setCatalogNumber('');
        setCourseTitle('');
        setUnits('');
    }

    if(currentCourses !== undefined) console.log(currentCourses);

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
                    <TextField onChange={handleSubject} value={subject} label="Subject"/>
                    <TextField onChange={handleCatalogNumber} value={catalogNumber} label="Catalog Number"/>
                    <TextField onChange={handleCourseTitle} value={courseTitle} label="Course Title"/>
                    <TextField onChange={handleUnits} value={units} label="Units"/>
                    <Button variant="outlined" onClick={addCourse}>Add Course</Button>
                </Box>
                <div><br/><br/><br/></div>
                <Button>Save & Submit</Button>
            </Box>
        </Fragment>
    )
}

function CurrentCoursesTableHead(){
    return (
        <TableHead>
        <TableRow key={makeKey}>
            {
                currentCoursesTable.map( attr =>
                    <TableCell key={makeKey()}>
                        {attr.attributeName}
                    </TableCell>
                )
            }
        </TableRow>
        </TableHead>
    );
}

function CurrentCoursesTableBody({currentCourses, setCourses}) {
    const [edit, setEdit] = useState(false);
    const handleDelete = (courseIDx) => {
        let courses = currentCourses.slice();
        courses.splice(courseIDx, 1);
        setCourses(courses);
    };

    const handleEdit = (courseIdx, colIdx) => {
        setEdit(!edit);
    };

    return (
        <TableBody>
            {
                currentCourses.map((course, rowIdx) =>
                   !edit ? <CurrentCourseRow
                       course={course}
                       handleEdit={handleEdit}
                       handleDelete={handleDelete}
                        rowIdx={rowIdx} /> :
                       <CurrentCourseRowEditable
                           currentCourses = {currentCourses}
                           course={course}
                           rowIdx={rowIdx}
                           setCourses={setCourses}
                           setEdit={setEdit}/>
                )
            }
        </TableBody>
    );
}

function CurrentCourseRow ({course, handleEdit, handleDelete, rowIdx}){

    return (
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
            </TableCell>
            <TableCell key={makeKey()}>
                <Button onClick={() => handleDelete(rowIdx)}>Delete</Button>
            </TableCell>

        </TableRow>
    )

}

function CurrentCourseRowEditable ({currentCourses, setCourses, course, rowIdx, setEdit}){

    const handleSave = (rowIdx) => {
        setEdit(false);
    }

    return (
        <TableRow key={makeKey()}>

            <TextField  label="Subject"/>
            <TextField  label="Catalog Number"/>
            <TextField  label="Course Title"/>
            <TextField  label="Units"/>

            <TableCell key={makeKey()}>
                <Button onClick={() => handleSave(rowIdx)}>Save</Button>
            </TableCell>

        </TableRow>
    )

}

