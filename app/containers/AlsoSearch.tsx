/* eslint-disable @next/next/no-img-element */
import { PeopleAlsoSearch } from "@/types";
import React from "react";

type Props = {
    data:PeopleAlsoSearch[]
};

function AlsoSearch({data}: Props) {
  return (
    <div className="p-4">
      <div className="border dark:shadow-md dark:bg-foreground border-gray-200/20 p-4 rounded-xl flex">
        {data.map((item:PeopleAlsoSearch,index:number)=>{
            return(
                <div key={index} className="w-1/4">
                    <div className="w-full p-1">
                    <img src={item.thumbnail} className=" object-cover rounded-lg" alt="s"/>
                    </div>
                    <h4 className="text-xs text-primary px-1 font-semibold">{item.title}</h4>
                </div>
            )
        })}
      </div>
    </div>
  );
}

export default AlsoSearch;
