import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
    <div className="relative w-60 h-70 bg-zinc-700 text-white rounded-4xl p-5 overflow-hidden">
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
<h5> .4mb</h5>
<span className='w-7 h-7 bg-zinc-400 rounded-full flex items-center justify-center font-semibold'>
<LuDownload size=".7em" color="white" />
</span>
        </div>
        <div className="tag w-full h-10 bg-zinc-600 py-2 px-4 ">
            <h3 className="text-xs text-center justify-center font-semibold">Download Now...</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
