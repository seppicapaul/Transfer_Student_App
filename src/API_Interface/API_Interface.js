import axios from 'axios';

const AxiosConfigured = () => {
    // Indicate to the API that all requests for this app are AJAX
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    // Set the baseURL for all requests to the API domain instead of the current domain
    // axios.defaults.baseURL = `http://localhost:8443/api/v1`;
    axios.defaults.baseURL = `http://localhost:8443/api/v1`;


    // Allow the browser to send cookies to the API domain (which include auth_token)
    axios.defaults.withCredentials = true;


//    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token;

    return axios;
};


const axiosAgent = AxiosConfigured();

export default class APIInterface {

    async getUserInfo(user_id) {
        return axiosAgent.get(`login/${user_id}`)
            .then(userInfo => userInfo.data)
            .catch(error => (
                {
                    error,
                    user: undefined
                 }));
    }

    async allRoutes() {
        return axiosAgent.get(`routes/all-routes`);
    }

    async routesWithID(routeID) {
        return axiosAgent.get(`routes/${routeID}`);
    }

    async accountsForRoute(routeID) {
        console.log(`accountsForRoute routeID = ${routeID}`);
        return axiosAgent.get(`accounts/${routeID}/route-accounts`);
    }

    async getCycleIDs(howMany) {
        return axiosAgent.get(`cycles/${howMany}/cycleIDs`);
    }

    async transactionsForCycleWithID(cycleID) {
        console.log(`transactionsForCycleWithID ${JSON.stringify(cycleID)}`);
        return axiosAgent.get(`transactions/${cycleID}/for-cycle-with-id`);
    }

    async transferCourses(studentID) {
        return axiosAgent.get(`transfer/${studentID}/transfer-courses`);
    }

    async enrollment(studentID) {
        return axiosAgent.get(`transfer/${studentID}/enrollment`);
    }

    async testCreditCourses(studentID) {
        return axiosAgent.get(`transfer/${studentID}/test-credit-courses`);
    }

    async arrUpdateForm(studentID) {
        return axiosAgent.get(`transfer/${studentID}/arr-update-form`);
    }
}