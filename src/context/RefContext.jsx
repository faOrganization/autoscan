import {createContext, useContext, useState} from "react";

export const Context = createContext();

const Provider = ({children}) => {
    const [ref, setRef] = useState();
    const data = {
        ref,
        setRef
    }

    return(
        <Context.Provider value={data} >
            {children}
        </Context.Provider>
    )
}

export default Provider;