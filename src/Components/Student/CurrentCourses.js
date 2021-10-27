import React, {Fragment, useState} from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import {Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import {currentCoursesTable} from "./StudentTableAttributes";
import '../../components.css';
import makeKey from "../../utils/keyGenerator";

export default function CurrentCourses(props) {
    const [currentCourses, setCourses] = useState([])
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
                        <TableBody>
                            {
                                currentCourses.map(course =>
                                <TableRow key={makeKey()}>
                                        {
                                            currentCoursesTable.map( attr =>
                                                <TableCell key={makeKey()}>
                                                    {course[attr.attributeCourseName]}
                                                </TableCell>
                                            )
                                        }
                                    <TableCell key={makeKey()}>
                                        <Button>Edit</Button>
                                    </TableCell>
                                    <TableCell key={makeKey()}>
                                        <Button>Delete</Button>
                                    </TableCell>

                                </TableRow>
                                )
                            }
                        </TableBody>
                    </TableHead>
                </TableContainer>
                <Box className='component-row'>
                    <TextField onChange={handleSubject} value={subject} label="Subject"/>
                    <TextField onChange={handleCatalogNumber} value={catalogNumber} label="Catalog Number"/>
                    <TextField onChange={handleCourseTitle} value={courseTitle} label="Course Title"/>
                    <TextField onChange={handleUnits} value={units} label="Units"/>
                    <Button variant="outlined" onClick={addCourse}>Add Course</Button>
                </Box>

            </Box>
        </Fragment>
    )
}
