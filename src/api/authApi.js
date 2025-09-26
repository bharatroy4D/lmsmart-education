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