import { KnowledgePanel, Metadata } from "@/types";
import React from "react";

type Props = {
  data: KnowledgePanel;
};

function KnowledgeCard({ data }: Props) {
  return (
    <div className="p-4">
      <div className="border dark:shadow-md dark:bg-foreground border-gray-200/20 p-4 rounded-xl">
        <div className=" border-b border-primary pb-5">
          <h1 className="text-primary font-semibold text-2xl">{data.title}</h1>
          <p className="text-secondary text-sm">{data.type}</p>
          <p className="text-xs text-secondary mt-2">{data.description}</p>
          {data.url && (
            <a
              className="text-xs dark:text-blue-800 text-blue-400   mt-2"
              href={data.url}
            >
              {data.url}
            </a>
          )}
        </div>
        <div className="metadata">
          {data.metadata &&
            data.metadata.map((item: Metadata, index: number) => {
              return (
                <div
                  className="flex space-x-2 items-center p-1 my-1 "
                  key={index}
                >
                  <h3 className="self-start dark:text-blue-800 text-blue-400  font-semibold">
                    {item.title}
                  </h3>
                  <p className="p-1 text-secondary text-xs">{item.value}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default KnowledgeCard;
