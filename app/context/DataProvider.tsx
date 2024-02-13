"use client";
import React, { createContext, useState, Dispatch, SetStateAction, useContext } from "react";

interface DataContextType {
    html: string;
    setHtml: Dispatch<SetStateAction<string>>;
    css: string;
    setCss: Dispatch<SetStateAction<string>>;
    js: string;
    setJs: Dispatch<SetStateAction<string>>;
}

export const DataContext = createContext<DataContextType | null>(null);

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useDataContext must be used within a DataContextProvider");
    }
    return context;
};

const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [html, setHtml] = useState<string>("");
    const [js, setJs] = useState<string>("");
    const [css, setCss] = useState<string>("");

    return (
        <DataContext.Provider
            value={{
                html,
                setHtml,
                css,
                setCss,
                js,
                setJs,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
