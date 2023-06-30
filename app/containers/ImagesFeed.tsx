/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Image, ImageMain } from '@/types';
  

type Props = {
    data:ImageMain[]
}

function ImagesFeed({data}: Props) {
  return (
    <div className=" w-full flex justify-center flex-wrap">
    {data &&
      data.map((item: ImageMain, index: number) => {
        return (
          <Dialog key={item.id}>
            <DialogTrigger className={` w-fit p-1`}>
              <img
                src={item.preview.url}
                key={item.id}
                className={`rounded-lg  hover:opacity-70 duration-150 cursor-pointer w-full h-[${item.preview.height}] `}
                width={item.preview.width}
                height={item.preview.height}
                alt={item.id}
              />
            </DialogTrigger>
            <DialogContent className="w-96 ">
              <a href={item.url} target="_blank">
                <img
                  src={item.url}
                  className="w-fit"
                  height={item.height}
                  alt="s"
                />
              </a>
            </DialogContent>
          </Dialog>
        );
      })}
   
  </div>
  )
}

export default ImagesFeed