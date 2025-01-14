import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import HistoryListingPage from "@/features/history/history-listing";
import { SearchParams } from "nuqs";
import React, { Suspense } from "react";

type pageProps = {
  searchParams: SearchParams;
};

export default async function HistoryPage({ searchParams }: pageProps) {
  const params = await searchParams;
  return (
    <div className="space-y-4">
      <Heading
        title="History Paid"
        description="Đây là những là yêu cầu đang chờ duyệt"
      />
      <Separator />
      <Suspense fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}>
        <HistoryListingPage searchParams={params} />
      </Suspense>
    </div>
  );
}
