import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
    baseURL: 'http://localhost:8888',

});


if (typeof window !== "undefined") {
    instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("jwt")}`;
}


// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error


    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    console.log("interceptors >>>", response)
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error


    // console.log(">>> run error:", error.response)
    // return error && error.response && error.response.data
    //     ? error.response.data : Promise.reject(error);

    const status = error && error.response && error.response.status || 500;
    switch (status) {
        case 401: {
            toast.error('Unauthorized the user. Please login...');
            return Promise.reject(error);
        }
        case 400: {
            return Promise.reject(error);
        }
    }

});
export default instance;