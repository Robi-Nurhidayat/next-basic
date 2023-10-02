"use client";
import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
const DarkMode = () => {
  const [darkOrLight, setDarkOrLight] = useState(false);
  return (
    <div
      className="cursor-pointer"
      onClick={() => setDarkOrLight(!darkOrLight)}
    >
      <div
        className="border  relative  flex items-center justify-between gap-3 rounded-full px-[3px] py-[1px] text-xl"
        style={{ transition: "all 10s" }}
      >
        <div>
          <MdOutlineDarkMode />
        </div>
        <div>
          <CiLight className="text-yellow-400" />
        </div>
        <div
          className="w-[20px] h-[20px] bg-green-500 rounded-full absolute "
          style={{
            right: darkOrLight ? "2px" : "",
            left: darkOrLight ? "" : "2px",
          }}
        ></div>
      </div>
    </div>
  );
};
export default DarkMode;
