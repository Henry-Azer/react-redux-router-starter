import axios from "axios";

import {
    // USERS_LIST_REQUEST,
    // USERS_LIST_SUCCEEDED,
    // USERS_LIST_ERROR,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCEEDED,
    REGISTRATION_ERROR,
    CLEAR_REGISTRATION_DETAILS,
} from "../../types";

const URL = "http://localhost:8080/api/user";

export const userList = (user) => (dispatch) => {
    dispatch({ type: REGISTRATION_REQUEST });

    axios.post(`${URL}`, user, {
    })
        .then((response) => {
            if (response.data.status === 200) {
                dispatch({
                    type: REGISTRATION_SUCCEEDED,
                    payload: response.data.body,
                });
            } else {
                dispatch({
                    type: REGISTRATION_ERROR,
                    payload: response.data.message,
                });
            }
        })
        .catch((error, response) => {
            console.log(error);
        });
};

export const userRegistration = (user) => (dispatch) => {
    dispatch({ type: REGISTRATION_REQUEST });

    axios.post(`${URL}`, user, {
    })
        .then((response) => {
            if (response.data.status === 200) {
                dispatch({
                    type: REGISTRATION_SUCCEEDED,
                    payload: response.data.body,
                });
            } else {
                dispatch({
                    type: REGISTRATION_ERROR,
                    payload: response.data.message,
                });
            }
        })
        .catch((error, response) => {
            console.log(error);
        });
};

export function clearRegistrationDetails() {
    return {
        type: CLEAR_REGISTRATION_DETAILS,
        payload: null,
    };
}
