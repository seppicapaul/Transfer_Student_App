import React, {Fragment, useContext, useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import '../../components.css';
import {StudentIDContext} from "../../StudentID/StudentIDProvider";
import API from "../../API_Interface/API_Interface";

export default function CorrespondingCourses(props) {
    const [courseCatalog, setCourseCatalog] = useState([]);

    useEffect(() => {
        const api = new API();
        async function getCourseCatalog() {
            const catalogJSONString = await api.csCourseCatalog();
            console.log(`nonarticulated courses from the DB ${JSON.stringify(catalogJSONString.data)}`);
            setCourseCatalog(catalogJSONString.data);
            console.log(courseCatalog);
        }

        getCourseCatalog();
    }, []);

    return (
        <Fragment>
            <Box className='component-column'>
                <Typography component="div" variant='h3'>
                    Corresponding Courses
                </Typography>
            </Box>
        </Fragment>
    )
}