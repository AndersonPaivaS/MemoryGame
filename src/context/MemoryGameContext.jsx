import { createContext } from "react";

export const MemoryGameContext = createContext({})

export function MemoryGameProvider( {children} ) {

    return(
        <MemoryGameContext.Provider value={{  }}>
            {children}
        </MemoryGameContext.Provider>
    )
}