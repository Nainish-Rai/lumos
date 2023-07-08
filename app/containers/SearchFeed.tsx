import { KnowledgePanel, PeopleAlsoSearch, Result } from "@/types";
import React from "react";
import ResultsCard from "../components/ResultsCard";
import KnowledgeCard from "./KnowledgeCard";
import AlsoSearch from "./AlsoSearch";

interface NewType {
  data: Result[];
  knowledge_panel: KnowledgePanel;
  alsoSearch: PeopleAlsoSearch[];
}

type Props = NewType;

function SearchFeed({ data, knowledge_panel, alsoSearch }: Props) {
  return (
    <div className="flex">
      <div className="text-primary w-[70%] m-4 rounded-3xl shadow-md dark:border bg-gray-50 dark:bg-zinc-900  ">
        {data &&
          data.map((item: Result, index: number) => {
            return (
              <ResultsCard
                key={index}
                title={item.title}
                url={item.url}
                description={item.description}
                favicons={item.favicons}
              />
            );
          })}
      </div>
      <div className="w-[30%]">
        {knowledge_panel && <KnowledgeCard data={knowledge_panel} />}
        {alsoSearch && <AlsoSearch data={alsoSearch} />}
      </div>
    </div>
  );
}

export default SearchFeed;
