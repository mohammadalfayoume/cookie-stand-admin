'use client'
// 1. create the provider, that will provide the global state to my app
// 1.1 create the context
// 1.2 create the context wrapper (provider)

import { createContext, useEffect, useState } from "react";

// 1.1 create the context
export const ThemeContext= createContext()

// 1.2 create the context wrapper (provider)
export default function ThemeWrapper({children}){
    const [isDarkTheme, setIsDarkTheme]= useState(true)

    function initialThemeHandler() {
        isDarkTheme && document.querySelector("body").classList.add("dark") // add dark class to the body element
    }

    function toggleThemeHandler() {
        setIsDarkTheme(!isDarkTheme)
        document.querySelector("body").classList.toggle("dark") // remove dark class from the body element
    }

    const globalState= {
        isDarkTheme: true,
        toggleThemeHandler
    }

    useEffect(()=> initialThemeHandler())

    return(
        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
    )
}