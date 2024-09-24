import { createContext, useState } from "react";

export const ToggleViewContext = createContext();

export const ToggleViewProvider = ({ children }) => {
    const [toggleView, setToggleView] = useState(true);

    const handleToggleView = () => {
        setToggleView(prevState => !prevState);
    };

    return (
        <ToggleViewContext.Provider value={{ toggleView, handleToggleView }}>
            {children}
        </ToggleViewContext.Provider>
    )
}
