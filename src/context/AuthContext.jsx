import { createContext, useContext, useState } from "react"
import { login, register, sendOtp, verifyOtp } from "../api/authApi"

const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // login
    const Login = async (data) => {
        try {
            const res = await login(data)
            if (res?.token) {
                localStorage.setItem("token", res.token)
                setUser(res?.user || null)
                return res;
            }
        } catch (err) {
            console.error("login is failed", err);
            throw err
        }
    }
    // register
    const Register = async (data) => {
        try {
            const res = await register(data)
            setUser(res?.user || null)
            return res;
        } catch (err) {
            console.error("register is failed", err)
            throw err
        }
    }

    // 🔹 send otp
    const OtpSend = async (data) => {
        try {
            const res = await sendOtp(data)
            return res;
        } catch (err) {
            console.error("otp send failed", err)
            throw err
        }
    }

    // 🔹 verify otp
    const VerifyOtp = async (data) => {
        try {
            const res = await verifyOtp(data)
            if (res?.token) {
                localStorage.setItem("token", res.token)
                setUser(res?.user || null)
            }
            return res;
        } catch (err) {
            console.error("otp verify failed", err)
            throw err
        }
    }

    // logout
    const Logout = () => {
        localStorage.removeItem("token")
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ Login, Register, user, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)
