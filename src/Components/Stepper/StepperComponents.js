import CompletedCourses from "../Student/CompletedCourses";
import CurrentCourses from "../Student/CurrentCourses";
import AdditionalCourses from "../Student/AdditionalCourses";
import CorrespondingCourses from "../Student/CorrespondingCourses";
import EligibleCourses from "../Student/EligibleCourses";
import ReviewCourses from "../Student/ReviewCourses";
import * as React from "react";

const steps = [
    {
        label: 'Completed Courses',
        description: `Description of step`,
        component: <CompletedCourses/>
    },
    {
        label: 'Current Courses',
        description:
            'Description of step',
        component: <CurrentCourses/>
    },
    {
        label: 'Additional Major Courses',
        description: `Description of step`,
        component: <AdditionalCourses/>
    },
    {
        label: 'Corresponding Courses',
        description: `Description of step `,
        component: <CorrespondingCourses/>
    },
    {
        label: 'Eligible Courses',
        description: `Description of step `,
        component: <EligibleCourses/>
    },
    {
        label: 'Review & Submit',
        description: `Description of step `,
        component: <ReviewCourses/>
    },

];

export {steps};