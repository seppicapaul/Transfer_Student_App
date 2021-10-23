import CompletedCourses from "../Student/CompletedCourses";
import CurrentCourses from "../Student/CurrentCourses";
import AdditionalCourses from "../Student/AdditionalCourses";
import CorrespondingCourses from "../Student/CorrespondingCourses";
import EligibleCourses from "../Student/EligibleCourses";
import * as React from "react";

const steps = [
    {
        label: 'Completed Courses',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
        component: <CompletedCourses/>
    },
    {
        label: 'Current Courses',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
        component: <CurrentCourses/>
    },
    {
        label: 'Additional Major Courses',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
        component: <AdditionalCourses/>
    },
    {
        label: 'Corresponding Courses',
        description: ` `,
        component: <CorrespondingCourses/>
    },
    {
        label: 'Eligible Courses',
        description: ` `,
        component: <EligibleCourses/>
    },
    {
        label: 'Review & Submit',
        description: ` `,
    },

];

export {steps};