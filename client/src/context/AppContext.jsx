import { createContext } from 'react';

export const AppContext = createContext();     //export it to use in other files

export const AppContextProvider = (props)=>{

    const value={

    }
    
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
} 
