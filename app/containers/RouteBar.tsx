"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { use } from "react";

type Props = {};

function RouteBar() {
  const { searchTerm } = useParams();
  return (
    <div className="w-full max-w-6xl mx-auto mt-2 px-4">
      <div className="flex space-x-3 mx-4">
        <Link prefetch={true} href={`/feed/search/${searchTerm}`}>
          <Button className="rounded-full px-6" variant="outline">
            {" "}
            All
          </Button>
        </Link>
        <Link prefetch={true} href={`/feed/images/${searchTerm}`}>
          <Button className="rounded-full px-6 " variant="outline">
            Images
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default RouteBar;
