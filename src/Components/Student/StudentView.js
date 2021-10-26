import React, {useState, useEffect, useContext, Fragment} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {flexbox} from '@mui/system';
import BaseCollapsibleTables from '../ComponentUtils/BaseCollapsibleTables'

import {transactionsAttributesForSingleBrand} from '../Transactions/transactionsTableAttributes';
import API from "../../API_Interface/API_Interface";
import {CycleIDContext} from '../../CycleID/CycleIDProvider';
import {useControlled} from "@mui/material";
import TransferStepper from '../Stepper/Stepper'
import VerticalLinearStepper from '../Stepper/VerticalStepper'
import {steps} from '../Stepper/StepperComponents';
import '../../components.css';

export default function StudentView(props) {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);

    };

    return activeStep < steps.length ? (
        <Fragment>
            <Box className='student-boxes'>
                <VerticalLinearStepper steps={steps}
                                       activeStep={activeStep} handleNext={handleNext} handleBack={handleBack}
                                       handleReset={handleReset}/>

                {steps[activeStep].component}
            </Box>
        </Fragment>) : (
        <Fragment>
            <Box className='student-boxes'>
                <VerticalLinearStepper steps={steps}
                                       activeStep={activeStep} handleNext={handleNext} handleBack={handleBack}
                                       handleReset={handleReset}/>
                <p> Done </p>
            </Box>
        </Fragment>
    )

}
