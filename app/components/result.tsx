"use client";
import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "@/app/context/DataProvider";




const Result = () => {
  const [src, setSrc] = useState("");
  const context = useContext(DataContext);

  useEffect(() => {
    if (context) {
      const { html, css, js } = context;
      const srcCode = `
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
            `;
      setSrc(srcCode);
    }
  }, [context]);

  

  if (!context) {
    return <div>Loading...</div>;
  }

  return (
    
    <main className="h-full">
       
      <iframe className=""
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
      </main>
    
    
  );
};

export default Result;
