import React, {Fragment} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import '../../components.css';

export default function CorrespondingCourses(props) {
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