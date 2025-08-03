import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
export const AuthUser = createContext()

const AuthContext = ({children}) => {
    const [userData, setUserData] = useState(null);
    useEffect(()=>{
        const {employees, admin} = getLocalStorage()
        setUserData({employees,admin})
    },[])
    
  return (
    <div>
        <AuthUser.Provider value={userData}>
        {children}
        </AuthUser.Provider>
    </div>
  )
}

export default AuthContext
