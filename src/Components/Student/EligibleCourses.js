import React, {Fragment} from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import '../../components.css';

export default function EligibleCourses(props) {
    return (
        <Fragment>
            <Box className='component-column'>
                <Typography component="div" variant='h3'>
                    Eligible Courses
                </Typography>
            </Box>
        </Fragment>
    )
}
