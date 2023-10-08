"use client";
import { useContext } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../../../context/ThemeContext";
const DarkMode = () => {
  const { darkOrLight, toggle } = useContext(ThemeContext);
  console.log(darkOrLight);
  return (
    <div className="cursor-pointer" onClick={toggle}>
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
