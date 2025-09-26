import { Children, createContext, useState } from "react"
import { login, register } from "../api/authApi"

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
            setUser(res?.data || null)
            return res;
        } catch (err) {
            console.error("register is failed", err)
            throw err
        }
    }
    return (
        <AuthContext.Provider value={{ Login, user }}>
            {children}
        </AuthContext.Provider>
    )
}
