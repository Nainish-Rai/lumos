import React from "react";
import Darkmodebtn from "../components/Darkmodebtn";

type Props = {};

function Navbar({}: Props) {
  return <nav className="w-full h-[6%] bg-background flex justify-between items-center ">
    <div className="text-gray-100 ml-auto mx-10 cursor-pointer"><Darkmodebtn/></div>
    </nav>;
}

export default Navbar;
