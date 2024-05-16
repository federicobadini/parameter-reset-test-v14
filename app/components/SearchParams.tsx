"use client";

import { useSearchParams } from "next/navigation";
import { ServerSearchParams } from "../page";

export function SearchParams({ serverSearchParams }: ServerSearchParams) {
  const searchParams = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams);
  return (
    <div className="border border-white w-1/2 min-h-64 flex flex-col justify-center">
      <div className="flex flex-col my-4 items-center justify-center">
        <span>Server:</span>
        <span>{JSON.stringify(serverSearchParams, null, 2)}</span>
      </div>
      <div className="flex flex-col my-4 items-center justify-center">
        <span>Client:</span>
        <span>{JSON.stringify(searchParamsObject, null, 2)}</span>
      </div>
    </div>
  );
}
