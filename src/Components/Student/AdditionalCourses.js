import React, {Fragment, useContext, useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import '../../components.css';

import API from "../../API_Interface/API_Interface";
import {additionalCoursesTableAttributes} from "./StudentTableAttributes";
import {StudentIDContext} from "../../StudentID/StudentIDProvider";
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
import makeKey from "../../utils/keyGenerator";
import {CheckBox} from "@mui/icons-material";

export default function AdditionalCourses({additionalCourses, setAdditionalCourses}) {
    const [nonArticulated, setNonArticulated] = useState([]);
    const studentIDContext = useContext(StudentIDContext);
    console.log(`In AdditionalCourses`);

    useEffect(() => {
        const api = new API();
        async function getCourses() {
            const studentID = studentIDContext.studentID;
            const transferJSONString = await api.nonarticulatedCourses(studentID);
            console.log(`nonarticulated courses from the DB ${JSON.stringify(transferJSONString)}`);
            setNonArticulated(transferJSONString.data);
        }

        getCourses();
    }, []);

    return (
       nonArticulated !== undefined && <Fragment>
            <Box className='component-column'>
                <TableContainer component={Paper}>
                    <div><p className='table-title-center'>Additional Major Courses</p></div>
                    <Table sx={{minWidth: 650}} aria-label="current course table">
                        <AdditionalCoursesTableHead/>
                        <CurrentCoursesTableBody
                            courses={nonArticulated}
                        />
                    </Table>
                </TableContainer>
                <div><br/><br/><br/></div>
                <div><br/><br/><br/></div>
                <Button>Save & Submit</Button>
            </Box>
        </Fragment>
    )
}

function AdditionalCoursesTableHead(){
    console.log('in AdditionalCoursesTableHead');
    return (
        <Fragment>
            <TableHead>
                <TableRow key={makeKey}>
                    {
                        additionalCoursesTableAttributes.map( attr =>
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

function CurrentCoursesTableBody({courses, setNonArticulated}) {
    console.log('in CurrentCoursesTableBody');
    console.log(`${JSON.stringify(courses)}`);
    return (
        courses !== undefined && <Fragment>
            <TableBody>
                {
                    courses.map((course, rowIdx) =>
                        <CheckableRows course={course}/>

                    )
                }
            </TableBody>
        </Fragment>
    );
}

function CheckableRows ({course, rowIdx}){
    const [checked, setChecked] = useState(false);
    const handleCheck = () => {
        setChecked(!checked);
    }
    console.log('in CurrentCoursesRow');
    console.log(`${JSON.stringify(course)}`);

    return (
        <Fragment>
            <TableRow key={makeKey()}>
                {
                    additionalCoursesTableAttributes.map((attr, colIdx) =>
                        <TableCell key={makeKey()}>
                            {course[attr.attributeDBName]}
                        </TableCell>
                    )
                }
                <TableCell key={rowIdx+'_checkBox'}>
                    <CheckBox checked={checked} onChange={handleCheck}/>
                </TableCell>
            </TableRow>
        </Fragment>
    )

}




