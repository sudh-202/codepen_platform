"use client";
import { useContext } from 'react';

//components
import Editor from './editor';



import { DataContext } from '../context/DataProvider';

// const Container = styled(Box)`
//     background-color: #060606;
//     height: 50vh;
//     display: flex;
// `

const Code = () => {

    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    return (
        <div className='flex '>
            <Editor 
                // language="xml"
                span="HTML"
                value={html}
                onChange={setHtml}
                icon='/'
                color='#FF3C41'
            />
            <Editor 
                // language="css"
                span="CSS"
                value={css}
                onChange={setCss}
                icon='*'
                color='#0EBEFF'
            />
            <Editor 
                // language="javascript"="JS"
                span="JS"
                value={js}
                onChange={setJs}
                icon='( )'
                color='#FCD000'
            />
        </div>
    )
}

export default Code;