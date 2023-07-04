'use client'
import React,{useState,useEffect} from "react";
import Darkmodebtn from "../components/Darkmodebtn";
import Searchbar from "../components/Searchbar";

type Props = {};

function Navbar({}: Props) {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY <= 25) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    changeNavbarColor();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeNavbarColor);
  });
  return <nav className={` ${colorChange?"h-16":"h-fit p-2 shadow-lg bg-foreground"} duration-300 fixed z-30 w-full top-0  bg-background`}>
    <div className="flex justify-between h-full items-center mx-auto px-5 w-full max-w-6xl">

    <Searchbar/>
    <div className="text-gray-100 ml-auto mx-10 cursor-pointer"><Darkmodebtn/></div>
    </div>
    </nav>;
}

export default Navbar;
