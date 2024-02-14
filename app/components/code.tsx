"use client";
import { useContext } from 'react';
import Editor from './editor';
import { DataContext } from '../context/DataProvider';

const Code = () => {
    const context = useContext(DataContext);

    // Perform null check to ensure context is not null
    if (!context) {
        return null; // or return a loading indicator
    }

    // Assert context as DataContextType to avoid TypeScript errors
    const { html, css, js, setHtml, setCss, setJs } = context 

    return (
        <div className='flex '>
            <Editor 
                span="HTML"
                value={html}
                onChange={setHtml}
                icon='/'
                color= 'white'
            />
            <Editor 
                span="CSS"
                value={css}
                onChange={setCss}
                icon='*'
                color='white'
            />
            <Editor 
                span="JS"
                value={js}
                onChange={setJs}
                icon='()'
                color='white'
            />
        </div>
    );
};

export default Code;


