import React, { useState, useContext } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
    
    const [number, setNumber] = useState(1);

    return (
        <GlobalContext.Provider
            value={{
                number,
                setNumber
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
