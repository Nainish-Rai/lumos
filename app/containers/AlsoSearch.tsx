/* eslint-disable @next/next/no-img-element */
'use client'
import { PeopleAlsoSearch } from "@/types";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  data: PeopleAlsoSearch[];
};

function AlsoSearch({ data }: Props) {
  const router = useRouter()
  return (
    <div className="p-4">
      <div className="border dark:shadow-md p-4 rounded-xl dark:bg-foreground border-gray-200/20 ">
        <h4 className=" font-medium" >People Also Search For</h4>
        <div className=" flex mt-2">
          {data.map((item: PeopleAlsoSearch, index: number) => {
            return (
              <div key={index} onClick={()=>{router.push(`/search/${item.title}`)}} className="w-1/4 cursor-pointer">
                <div className="w-full p-1">
                  <img
                    src={item.thumbnail}
                    className=" object-cover rounded-lg"
                    alt="s"
                  />
                </div>
                <h4 className="text-xs text-primary px-1 font-semibold">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AlsoSearch;
