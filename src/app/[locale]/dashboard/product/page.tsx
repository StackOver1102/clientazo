import { Separator } from "@/components/ui/separator";
// import { Plus } from 'lucide-react';
// import Link from 'next/link';
import { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import ProductListingPage from "@/features/products/components/product-listing";
import ProductTableAction from "@/features/products/components/product-tables/product-table-action";
import PageContainer from "@/components/PageContainer";
import { Heading } from "@/components/ui/heading";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import { serialize } from "@/hooks/searchparams";
import ProductGrid from "@/components/ui/grid/product-grid";

export const metadata = {
  title: "Dashboard: Products",
};

type pageProps = {
  searchParams: SearchParams;
};

export default async function Page({ searchParams }: pageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  // await searchParamsCache.parse(searchParams);
  const params = await searchParams;

  // This key is used for invoke suspense if any of the search params changed (used for filters).
  const key = serialize({ ...params });

  const viewType = params.viewType || "table";

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title="Products"
            description=""
          />
        </div>
        <Separator />
        <ProductTableAction />
        <Suspense
          key={key}
          fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}
        >
          {viewType === "table" ? (
            <ProductListingPage searchParams={params} />
          ) : (
            <ProductGrid /> // Assuming you have a ProductGridPage component
          )}
        </Suspense>
      </div>
    </PageContainer>
  );
}
