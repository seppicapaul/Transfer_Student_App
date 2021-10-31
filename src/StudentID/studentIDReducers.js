

const studentIDReducers = (state, action) => {
    switch( action.type ) {
        case 'FETCH_STUDENT_ID':
            return {
                ...state,
                loading: true,
                error: false,
            };
        case 'FETCH_STUDENT_ID_SUCCESS':
            return {
                ...state,
                loading: false,
            };
        case 'FETCH_STUDENT_ID_ERROR':
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: JSON.stringify(action.payload)
            };
        default:
            return state;
    }
};

export default studentIDReducers;