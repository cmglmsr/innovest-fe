import axios from 'axios';
import config from "@/config/config.js";

const apiClient = axios.create({
    baseURL: config.BACKEND_URL,
});

/**
 *
 * @param {import("axios").AxiosRequestConfig} config
 * @returns {import("axios").AxiosResponse}
 */
export async function requestWithCommonHeaders(config){

    config.headers = config.headers || {}
    Object.assign(config.headers, {
        'Content-Type': 'application/json'
    })

    try {
        return await apiClient.request(config);
    } catch (error) {
        let message = 'An unexpected error occurred. Please try again later.';
        if (error.response) {
            const errorMessage = error.response.data;
            const errorCode = error.response.status;
            message = `An Error Occured With Status Code ${errorCode}: ${errorMessage.message}`;
        } else if (error.request) {
            message = 'No response was received from the server. Please check your network connection.';
        } else {
            message = error.message;
        }
        // apiErrorBus.emit('api-error', message); // Use the event bus to emit the formatted message
    }
}

export default requestWithCommonHeaders;
