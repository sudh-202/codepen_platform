"use client";
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import Editor from "./editor";

// Define the DataContextType interface
interface DataContextType {
    html: string;
    setHtml: Dispatch<SetStateAction<string>>;
    css: string;
    setCss: Dispatch<SetStateAction<string>>;
    js: string;
    setJs: Dispatch<SetStateAction<string>>;
}

// Create the DataContext
const DataContext = createContext<DataContextType | null>(null);

// Define the DataProvider component
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

// Define the Code component
const Code: React.FC = () => {
    // Use the useContext hook to access context values
    const context = useContext(DataContext);

    // Check if context exists and destructure its properties
    const { html, css, js, setHtml, setCss, setJs } = context || {};

    return (
        <div className="flex">
            {/* Render Editor for HTML */}
            <Editor
                span="HTML"
                icon="/"
                color="#FF5F56"
                value={html || ''}
                onChange={setHtml || (() => {})}
            />
            {/* Render Editor for CSS */}
            <Editor
                span="CSS"
                icon="*"
                color="#0EBEFF"
                value={css || ''}
                onChange={setCss || (() => {})}
            />
            {/* Render Editor for JS */}
            <Editor
                span="JS"
                icon="()"
                color="#FF5F56"
                value={js || ''}
                onChange={setJs || (() => {})}
            />
        </div>
    );
}

export { DataContext, DataProvider, Code };