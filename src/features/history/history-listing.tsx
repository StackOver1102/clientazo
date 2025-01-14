// import { searchParamsCache } from '@/lib/searchparams';
import { DataTable as RequestTable } from "@/components/ui/table/data-table";
import { Product } from "@/constants/data";
import { fakeProducts } from "@/constants/mock-data";
// import { searchParamsCache } from "@/hooks/searchparams";
import { SearchParams } from "nuqs";
import { columns } from "./ui/tables/columns";

// type ProductListingPage = {};

export default async function HistoryListingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page, q: search, limit: pageLimit, categories } = searchParams;

  const filters = {
    page: page ? parseInt(page as string, 10) : undefined,
    limit: pageLimit ? parseInt(pageLimit as string, 10) : undefined,
    ...(search && { search: search as string }),
    ...(categories && { categories: categories as string }),
  };

  const data = await fakeProducts.getProducts(filters);
  const totalProducts = data.total_products;
  const products: Product[] = data.products;

  return (
    <RequestTable
      columns={columns}
      data={products}
      totalItems={totalProducts}
    />
  );
}
