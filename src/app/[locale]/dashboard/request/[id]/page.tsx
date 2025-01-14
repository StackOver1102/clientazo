import { Suspense } from "react";
import RequestViewPage from "@/features/products/components/product-view-page";
import FormCardSkeleton from "@/components/form-card-skeleton";

export const metadata = {
  title: "Dashboard : Request View",
};

type PageProps = { params: Promise<{ id: string }> };

export default async function Page(props: PageProps) {
  const params = await props.params;
  console.log('params', params);
  return (
    <div className="flex-1 space-y-4">
      <Suspense fallback={<FormCardSkeleton />}>
        <RequestViewPage id={params.id} />
      </Suspense>
    </div>  
  );
}
