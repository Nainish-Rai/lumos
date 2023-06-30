import React from "react";
import Darkmodebtn from "../components/Darkmodebtn";
import Searchbar from "../components/Searchbar";

type Props = {};

function Navbar({}: Props) {
  return <nav className={` h-16 fixed z-30 w-full top-0  bg-background`}>
    <div className="flex justify-between h-full items-center mx-auto w-full max-w-7xl">

    <Searchbar/>
    <div className="text-gray-100 ml-auto mx-10 cursor-pointer"><Darkmodebtn/></div>
    </div>
    </nav>;
}

export default Navbar;
