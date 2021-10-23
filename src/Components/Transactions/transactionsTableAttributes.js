const transactionsAttributesForSingleBrand = [
    {
        attributeName: 'Date',
        datetimeAttribute: true,
        attributeDBName: 'transactionDate',
        align: 'left'
    },
    {
        attributeName: 'ID',
        attributeDBName: 'transactionID',
        align: 'left'
    },
    {
        attributeName: 'Account',
        attributeDBName: 'accountName',
        align: 'left'
    },
    {
        attributeName: 'Employee',
        attributeDBName: 'employeeName',
        align: 'left'
    },
    {
        attributeName: 'Route',
        attributeDBName: 'routeName',
        align: 'left'
    },
    {
        attributeName: 'Market',
        attributeDBName: 'marketName',
        align: 'left'
    },
    {
        attributeName: 'Brand',
        attributeDBName: 'productName',
        align: 'left'
    },
    {
        attributeName: 'Taps',
        attributeDBName: 'taps',
        align: 'left'
    }
];

const transactionsAttributesForAccount = [
    {
        attributeName: 'Account',
        attributeDBName: 'accountName',
        align: 'left'
    },
    {
        attributeName: 'CleaningDate',
        datetimeAttribute: true,
        attributeDBName: 'transactionDate',
        align: 'left'
    },
    {
        attributeName: 'ID',
        attributeDBName: 'transaction',
        align: 'left'
    },
    {
        attributeName: 'Cycle',
        attributeDBName: 'cycleID',
        align: 'left'
    },
    {
        attributeName: 'Employee',
        attributeDBName: 'employeeName',
        align: 'left'
    },
    {
        attributeName: 'Route',
        attributeDBName: 'routeName',
        align: 'left'
    },
    {
        attributeName: 'Market',
        attributeDBName: 'marketName',
        align: 'left'
    },
    {
        attributeName: 'Num Brands',
        attributeDBName: 'numDistinctBrands',
        align: 'left'
    },
    {
        attributeName: 'Num Taps',
        attributeDBName: 'taps',
        align: 'left'
    }
];


export  {transactionsAttributesForSingleBrand, transactionsAttributesForAccount};

