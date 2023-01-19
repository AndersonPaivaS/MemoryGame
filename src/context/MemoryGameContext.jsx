import { createContext, useEffect, useState } from "react";

export const MemoryGameContext = createContext({})

export function MemoryGameProvider( {children} ) {

    const [items, setItems] = useState([])


    const addItems = (e) => {
        let itemName = e.target.name
        let copyOfItems = items
        const found = copyOfItems.find(item => item.name == itemName)
        
        if(found == undefined) {
            setItems([...items, {name: itemName, situation: true}])
        }   
    }
    const removeItems = () => {
        setItems([])
    }

    /*///// GAME //////////////*/


    items.forEach(function(element, index) {
        element.id = index
    });

    let duplicateItems = items.concat(items)
    let shuffledItems = duplicateItems.sort(()=> Math.random() - 0.5)
    

    return(
        <MemoryGameContext.Provider value={{

            addItems,
            items,
            removeItems,
            shuffledItems,

            }}>
            {children}
        </MemoryGameContext.Provider>
    )
} 