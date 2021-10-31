
const fetchStudentID = () => {
    return {
        type: 'FETCH_CYCLE_ID',
    }
};

const recordFetchedStudentID = (cycleIDRecord) => {
    return {
        type: 'FETCH_CYCLE_ID_SUCCESS',
        payload: cycleIDRecord,
    }
};

const fetchedStudentIDSuccess = () => {
    return {
        type: 'FETCH_CYCLE_ID_SUCCESS',
    }
};

const fetchedStudentIDError = (errorMsg) => {
    return {
        type: 'FETCH_CYCLE_ID_ERROR',
        payload: errorMsg,
    }
};

export {fetchStudentID, fetchedStudentIDSuccess, fetchedStudentIDError}
