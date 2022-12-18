import { createContext,useState } from "react"

export const  AuthContext = createContext() 

function AuthContextProvider({children}){
    const [isauth,setIsAuth]=useState(false)
    const [userName,setUserName]=useState("")
    const [userEmail,setUserEmail]=useState("")
    const login=()=>{
        setIsAuth(true)
    }
    const logout=()=>{
        setIsAuth(false)
    }
    const setName=(name)=>{
        setUserName(name)
    }
    const setEmail=(email)=>{
        setUserEmail(email)
    }
    
    return <AuthContext.Provider value={{isauth,login,logout,setName,userName,setEmail,userEmail}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider