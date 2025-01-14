import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import RequestListingPage from "@/features/request/request-listing";
import { serialize } from "@/hooks/searchparams";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { SearchParams } from "nuqs";
import { Suspense } from "react";

type pageProps = {
  searchParams: SearchParams;
};

export default async function RequestPage({ searchParams }: pageProps) {
  // await searchParamsCache.parse(searchParams);
  const params = await searchParams;

  // This key is used for invoke suspense if any of the search params changed (used for filters).
  const key = serialize({ ...params });

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <Heading
          title="Request"
          description="Đây là những là yêu cầu đang chờ duyệt"
        />
        <Link
          href="/dashboard/request/new"
          className={cn(buttonVariants(), "text-xs md:text-sm")}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Link>
      </div>
      <Separator />
      <Suspense
        key={key}
        fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}
      >
        <RequestListingPage searchParams={params} />
      </Suspense>
    </div>
  );
}
