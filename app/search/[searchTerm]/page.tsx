"use client";
import {useState,useEffect} from "react"
import { useParams } from "next/navigation";
import { searchApi } from "../../../utils/api";
import ResultsCard from "@/app/components/ResultsCard";
import SkeletonSearchPage from "@/app/components/Skeleton/SkeletonSearchPage";
import { Main, Result } from "@/types";
import RouteBar from "@/app/containers/RouteBar";

type Props = {};
type searchApi = {
    data: Main;
    isError: boolean;
    isLoading: boolean;
  
};

function page({}: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { searchTerm } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [page,setPage] = useState<number>(0);
  console.log(page)
  const options = {
    page: page,
    safe: false,
    additional_params: {
      hl: "en",
    },
  };

  const { data, isLoading, isError }: searchApi = searchApi(
    searchTerm,
    options
  );
  if (isError) return "An error has occurred.";
  if (isLoading) return <SkeletonSearchPage />;
  return (
    <div className="w-full h-screen pt-16">
      <div className="w-full max-w-7xl mx-auto">
        <RouteBar searchTerm={searchTerm}/>
        <div className="text-primary w-[70%]">
          {data &&
            data.results.map((item: Result, index: number) => {
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
            {/* <button className="h-6 w-6 rounded bg-white" onClick={()=>setPage(prev=>prev+1)}>Load More</button> */}
        </div>
      </div>
    </div>
  );
}

export default page;
