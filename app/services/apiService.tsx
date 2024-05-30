import axios from "@/app/utils/axiosCustomize";
import instance from "@/app/utils/axiosCustomize";

const postCreateNewProfileUser = async (url: string, userData: any) => {
    return instance.post(url, userData);
}


const postCreateNewUser = async (url: string, userData: any) => {
    return instance.post(url, userData);
}

const postCreateBookDonation = async (url: string, userData: any) => {
    // Get token from localStorage
    let token = localStorage.getItem("jwt");

    //console.log("check token bbbb", token)
    // Set Authorization header with token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return instance.post(url, userData, config);
}

const postUserLogin = async (url: string, userData: any) => {
    return instance.post(url, userData);
}

const postSendBloodRequest = async (url: string, userData: any) => {
    // Get token from localStorage
    let token = localStorage.getItem("jwt");

    //console.log("check token bbbb", token)
    // Set Authorization header with token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    // Send request with axios and config
    return instance.post(url, userData, config);
}

const getAllRequest = async (url: string) => {
    // Get token from localStorage
    let token = localStorage.getItem("jwt");

    //console.log("check token bbbb", token)
    // Set Authorization header with token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    // Send request with axios and config
    return instance.get(url, config);
}


const getAllBloodBank = async (url: string) => {
    // Get token from localStorage
    let token = localStorage.getItem("jwt");

    //console.log("check token bbbb", token)
    // Set Authorization header with token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    // Send request with axios and config
    return instance.get(url, config);

}

const getAllDonationScheduleByHopitalId = async (url: string) => {
    // Get token from localStorage
    let token = localStorage.getItem("jwt");

    // console.log("check token bbbb", token)
    // Set Authorization header with token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    // Send request with axios and config
    return instance.get(url, config);

}

const getAllDonorByHospitalId = async (url: string) => {
    // Get token from localStorage
    let token = localStorage.getItem("jwt");

    // console.log("check token bbbb", token)
    // Set Authorization header with token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    // Send request with axios and config
    return instance.get(url, config);

}


const postCreateDonorInfor = async (url: string, userData: any) => {
    // Get token from localStorage
    let token = localStorage.getItem("jwt");

    //console.log("check token bbbb", token)
    // Set Authorization header with token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return instance.post(url, userData, config);
}

const deteleteRequest = async (url: string, userData: any) => {
    // Get token from localStorage
    let token = localStorage.getItem("jwt");

    //console.log("check token bbbb", token)
    // Set Authorization header with token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: userData // Thêm dữ liệu vào config
    };
    //console.log("check congiiiii", config.data.id)
    return instance.delete(url, config);
}

const getAllDonorInfor = async (url: string) => {
    // Get token from localStorage
    let token = localStorage.getItem("jwt");

    //console.log("check token bbbb", token)
    // Set Authorization header with token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    // Send request with axios and config
    return instance.get(url, config);
}

const postRequestBloodFromAdmin = async (url: string, userData: any) => {
    // Get token from localStorage
    let token = localStorage.getItem("jwt");

    //console.log("check token bbbb", token)
    // Set Authorization header with token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return instance.post(url, userData, config);
}

export {
    postCreateNewProfileUser, postCreateNewUser, postUserLogin, postSendBloodRequest,
    getAllRequest, getAllBloodBank, postCreateBookDonation, getAllDonationScheduleByHopitalId,
    postCreateDonorInfor, getAllDonorInfor, getAllDonorByHospitalId, deteleteRequest,
    postRequestBloodFromAdmin
}