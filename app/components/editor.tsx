import { MdCloseFullscreen } from "react-icons/md";
import { Controlled as ControledEditor} from 'react-codemirror2';


const Editor = () => {
  return (
    <div>
      <div className="flex flex-row bg-[#060606] text-[#AAAEBC] justify-between font-bold">
        <div className="bg-[#1d1e22] text-white flex p-4 flex-row">
          <div className="bg-red-500 justify-center h-6 w-6 mr-4 pb-2 rounded flex ">
            /
          </div>
          HTML
        </div>
        <MdCloseFullscreen className="w-4 h-4"/>
      </div>
    </div>
  );
};

export default Editor;


