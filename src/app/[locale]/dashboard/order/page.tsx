import PageContainer from "@/components/PageContainer";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import OrderListingPage from "@/features/orders/components/orders-listing";
import OrderTableAction from "@/features/orders/components/orders-tables/orders-table-action";
import { Suspense } from "react";

export default function OrderPage() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title="Orders" description="" />
        </div>
        <Separator />
        <OrderTableAction />
        <Suspense
          fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}
        >
          <OrderListingPage />
        </Suspense>
      </div>
    </PageContainer>
  );
}
