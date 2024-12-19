import { createContext, useContext } from "react";

export const themeContext = createContext({
    themeMode: "light",
    lightTheme: () => {},
    darkTheme: () => {}
});

// We can create a diff. file for contextProvider but we can create in this file.


export const ThemeProvider = themeContext.Provider // This is Only used for PROVIDE

//Create a Custom Hooks
export default function useTheme(){
    return useContext(themeContext)
}

// Now if we call themeProvider it will return the useContext, So importing two diff.
// files and function stuff are reduced.