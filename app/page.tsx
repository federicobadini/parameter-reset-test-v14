import { Navigation } from "./components/Navigation";
import { SearchParams } from "./components/SearchParams";

export const dynamic = "force-dynamic";

export type ServerSearchParams = {
  [key: string]: any;
};

type PageProps = { searchParams: ServerSearchParams };

export default function Page({ searchParams }: PageProps) {
  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <Navigation />
      <SearchParams serverSearchParams={searchParams} />
    </div>
  );
}
