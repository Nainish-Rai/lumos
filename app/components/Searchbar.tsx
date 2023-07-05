"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {};

function Searchbar({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (pathname.includes("images")) {
      router.push(`/feed/images/${searchTerm}`);
    } else {
      router.push(`/feed/search/${searchTerm}`);
    }
  };
  return (
    <div className=" w-[40%]">
      <div className="flex w-full items-center space-x-2">
        <form className="flex space-x-2 w-full" onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            placeholder="Search Here"
            className="border active:outline-none w-full rounded-full focus:outline-none "
          />
          <Button className="shadow" type="submit">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
