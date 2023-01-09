"use client"
// 1. create the provider, that will provide the global state to my app
// 1.1 create the context
// 1.2 create the context wrapper (provider)

import { createContext, useState } from "react"
import axios from "axios"

export const AuthContext= createContext()

export function AuthWrapper({children}) {
    const [globalState, setGlobalState]= useState({
        token: null,
        login
    })
    async function login(userInfo) {
        // end a request to the server
        const url= "https://cookie-stands-v001.herokuapp.com/api/token/" //the server url
        const res= await axios.post(url,userInfo)
        setGlobalState({
            tokens: res.data,
            login
        })
    }

    return(
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    )
}