// import { searchParamsCache } from '@/lib/searchparams';
import { DataTable as ProductTable } from "@/components/ui/table/data-table";
import { columns } from "./product-tables/columns";
import { Product } from "@/constants/data";
import { fakeProducts } from "@/constants/mock-data";
// import { searchParamsCache } from "@/hooks/searchparams";
import { SearchParams } from "nuqs";

// type ProductListingPage = {};

export default async function ProductListingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Showcasing the use of search params cache in nested RSCs
  // const page = searchParamsCache.get("page");
  // const search = searchParamsCache.get("q");
  // const pageLimit = searchParamsCache.get("limit");
  // const categories = searchParamsCache.get("categories");
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
    <ProductTable
      columns={columns}
      data={products}
      totalItems={totalProducts}
    />
  );
}
