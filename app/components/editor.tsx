import { MdCloseFullscreen } from "react-icons/md";
import React, { Dispatch, SetStateAction, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html'; // Import HTML mode
import 'ace-builds/src-noconflict/theme-github';

interface EditorProps {
  span?: string;
  icon?: string;
  color?: string;
  value?: string;
  onChange?: Dispatch<SetStateAction<string>>;
}

const Editor: React.FC<EditorProps> = ({span, icon, color, value, onChange}) => {

  const [open, setOpen] = useState(true);

  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  }
  return (
    <div className="grow px-3 pb-3 cursor-pointer bg-black z-1"  style={open ? null : {flexGrow: 0}}>
      <div className="flex flex-row bg-white text-[#AAAEBC] justify-between font-bold border-y-2 ">
         {span && (
        <div className="bg-[#E8E8E8] text-black flex p-4 flex-row">
          <div className={`bg-${color} justify-center h-6 w-6 mr-4 pb-2 rounded flex `}>
            {icon}
          </div>
          {span}
        </div>
        )}
        <MdCloseFullscreen className="" style={{alignSelf: 'center'}}
        onClick={() => setOpen(prevState => !prevState)}/>
      </div>
      <AceEditor
        mode="html" // Set mode to HTML
        theme="github"
        name="editor"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`${value}`} // Initial content
        onChange={ handleChange}
        width="100%"
        height="400px"
        // style={{ backgroundColor: '#1C1F22' }}
      />
    </div>
  );
};

export default Editor;
