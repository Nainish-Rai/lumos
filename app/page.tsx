import React from "react";
import Navbar from "./containers/Navbar";
import Searchbar from "./components/Searchbar";

type Props = {};

function page({}: Props) {
  return (
    <div className=" bg-background h-screen w-full ">
      <Navbar />
      <div className="w-full h-[94%] flex items-center justify-center">
        <Searchbar/>
      </div>
    </div>
  );
}

export default page;
