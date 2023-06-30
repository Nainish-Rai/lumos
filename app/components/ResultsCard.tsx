/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  url: string;
  favicons: { high_res: string; low_res: string };
};

function ResultsCard({ title, description, url, favicons }: Props) {
  return (
    <a target="_blank" href={url}>
      <div className="w-full  hover:shadow-lg hover:bg-foreground  duration-300 rounded-2xl flex  my-2 gap-5 flex-col p-5 px-8">
        <div className="flex items-center space-x-4">
          <img
            src={favicons.high_res}
            className=" rounded-full"
            alt="f"
            height={30}
            width={30}
          />
          <div className="flex flex-col gap-0">
            <h2 className="dark:text-blue-800 text-blue-400 font-semibold text-lg">{title}</h2>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-xs hover:text-pink-600 text-secondary"
            >
              {url}
            </a>
          </div>
        </div>
        <p className="text-secondary text-sm leading-relaxed ">{description}</p>
      </div>
    </a>
  );
}

export default ResultsCard;
