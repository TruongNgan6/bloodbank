import axios from "@/app/utils/axiosCustomize";
import instance from "@/app/utils/axiosCustomize";

const postCreateNewProfileUser = async (url: string, userData: any) => {
    return instance.post(url, userData);
}


const postCreateNewUser = async (url: string, userData: any) => {
    return instance.post(url, userData);
}

const postUserLogin = async (url: string, userData: any) => {
    return instance.post(url, userData);
}

export {
    postCreateNewProfileUser, postCreateNewUser, postUserLogin
}