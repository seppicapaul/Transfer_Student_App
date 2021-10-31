const completedCourseTables = [
    {
        tableName: 'Transferred Courses',
        tableAttributes: [
            {
                attributeName: 'School',
                attributeDBName: 'from_school',
                align: 'left'
            },
            {
                attributeName: 'Subject',
                attributeDBName: 'from_subject',
                align: 'left'
            },
            {
                attributeName: 'Course',
                attributeDBName: 'from_title',
                align: 'left'
            },
            {
                attributeName: 'Term',
                attributeDBName: 'from_semester',
                align: 'left'
            },
            {
                attributeName: 'Year',
                attributeDBName: 'from_year',
                align: 'left'
            },

            {
                attributeName: 'Grade',
                attributeDBName: 'from_title',
                align: 'left'
            },
            {
                attributeName: 'Units',
                attributeDBName: 'from_units',
                align: 'left'
            },
            {
                attributeName: 'SSU Subject',
                attributeDBName: 'ssu_catalog',
                align: 'left'
            },
            {
                attributeName: 'SSU Course',
                attributeDBName: 'ssu_catalog',
                align: 'left'
            },
        ],
    },
    {
        tableName: 'CS and Math Courses',
        tableAttributes: [
            {
                attributeName: 'School',
                attributeDBName: 'from_school',
                align: 'left'
            },
            {
                attributeName: 'Subject',
                attributeDBName: 'from_subject',
                align: 'left'
            },
            {
                attributeName: 'Course',
                attributeDBName: 'from_title',
                align: 'left'
            },
            {
                attributeName: 'Term',
                attributeDBName: 'from_semester',
                align: 'left'
            },
            {
                attributeName: 'Year',
                attributeDBName: 'from_year',
                align: 'left'
            },

            {
                attributeName: 'Grade',
                attributeDBName: 'from_title',
                align: 'left'
            },
            {
                attributeName: 'Units',
                attributeDBName: 'from_units',
                align: 'left'
            },
            {
                attributeName: 'SSU Subject',
                attributeDBName: 'ssu_catalog',
                align: 'left'
            },
            {
                attributeName: 'SSU Course',
                attributeDBName: 'ssu_catalog',
                align: 'left'
            },
        ],
    },
    {
        tableName: 'SSU Courses',
        tableAttributes: [
            {
                attributeName: 'School',
                attributeDBName: 'from_school',
                align: 'left'
            },
            {
                attributeName: 'Subject',
                attributeDBName: 'from_subject',
                align: 'left'
            },
            {
                attributeName: 'Course',
                attributeDBName: 'from_title',
                align: 'left'
            },
            {
                attributeName: 'Term',
                attributeDBName: 'from_semester',
                align: 'left'
            },
            {
                attributeName: 'Year',
                attributeDBName: 'from_year',
                align: 'left'
            },

            {
                attributeName: 'Grade',
                attributeDBName: 'from_title',
                align: 'left'
            },
            {
                attributeName: 'Units',
                attributeDBName: 'from_units',
                align: 'left'
            },
            {
                attributeName: 'SSU Subject',
                attributeDBName: 'ssu_catalog',
                align: 'left'
            },
            {
                attributeName: 'SSU Course',
                attributeDBName: 'ssu_catalog',
                align: 'left'
            },
        ],
    },

    {
        tableName: 'ARR Update Forms',
        tableAttributes: [
            {
                attributeName: 'School',
                attributeDBName: 'from_school',
                align: 'left'
            },
            {
                attributeName: 'Subject',
                attributeDBName: 'from_subject',
                align: 'left'
            },
            {
                attributeName: 'Course',
                attributeDBName: 'from_title',
                align: 'left'
            },
            {
                attributeName: 'Term',
                attributeDBName: 'from_semester',
                align: 'left'
            },
            {
                attributeName: 'Year',
                attributeDBName: 'from_year',
                align: 'left'
            },

            {
                attributeName: 'Grade',
                attributeDBName: 'from_title',
                align: 'left'
            },
            {
                attributeName: 'Units',
                attributeDBName: 'from_units',
                align: 'left'
            },
            {
                attributeName: 'SSU Subject',
                attributeDBName: 'ssu_catalog',
                align: 'left'
            },
            {
                attributeName: 'SSU Course',
                attributeDBName: 'ssu_catalog',
                align: 'left'
            },
        ],
    },
    {
        tableName: 'Test Credit Courses',
        tableAttributes: [
            {
                attributeName: 'School',
                attributeDBName: 'from_school',
                align: 'left'
            },
            {
                attributeName: 'Subject',
                attributeDBName: 'from_subject',
                align: 'left'
            },
            {
                attributeName: 'Course',
                attributeDBName: 'from_title',
                align: 'left'
            },
            {
                attributeName: 'Term',
                attributeDBName: 'from_semester',
                align: 'left'
            },
            {
                attributeName: 'Year',
                attributeDBName: 'from_year',
                align: 'left'
            },

            {
                attributeName: 'Grade',
                attributeDBName: 'from_title',
                align: 'left'
            },
            {
                attributeName: 'Units',
                attributeDBName: 'from_units',
                align: 'left'
            },
            {
                attributeName: 'SSU Subject',
                attributeDBName: 'ssu_catalog',
                align: 'left'
            },
            {
                attributeName: 'SSU Course',
                attributeDBName: 'ssu_catalog',
                align: 'left'
            },
        ],
    },

];

const currentCoursesTable = [
    {
        attributeName: 'Subject',
        attributeCourseName: 'subject',
        align: 'left'
    },
    {
        attributeName: 'Catalog Number',
        attributeCourseName: 'catalogNumber',
        align: 'left'
    },
    {
        attributeName: 'Course Title',
        attributeCourseName: 'courseTitle',
        align: 'left'
    },
    {
        attributeName: 'Units',
        attributeCourseName: 'units',
        align: 'left'
    },
];

export {completedCourseTables, currentCoursesTable};