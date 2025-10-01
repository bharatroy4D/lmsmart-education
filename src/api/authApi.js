import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000"
})

export const login = async (data) => {
    try {
        const res = await API.post("/authentication_app/signin", data)
        return res.data;
    } catch (err) {
        throw err.response?.data || { message: "login is failed" }
    }
}

export const register = async (data) => {
    try{
        const res = await API.post("/authentication_app/signup", data)
        return res.data;
    }catch (err){
        throw err.response?.data || {message:"register is failed"}
    }
}
// send otp
export const sendOtp = async (data) => {
    try {
        const res = await API.post("/authentication_app/resend_otp/", data);
        return res;
    } catch (err) {
        throw err.response?.data || { message: "OTP send failed" };
    }
};

// verify otp
export const verifyOtp = async (data) => {
    try {
        const res = await API.post("/authentication_app/verify_otp/", data);
        return res;
    } catch (err) {
        throw err.response?.data || { message: "OTP verify failed" };
    }
};



