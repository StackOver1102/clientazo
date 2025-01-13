import { DataTable as OrderTable } from "@/components/ui/table/data-table";

import { columns } from "./orders-tables/columns";

// type ProductListingPage = {};

export default async function OrderListingPage() {
  // Showcasing the use of search params cache in nested RSCs
  // const page = searchParamsCache.get("page");
  // const search = searchParamsCache.get("q");
  // const pageLimit = searchParamsCache.get("limit");
  // const categories = searchParamsCache.get("categories");
  //   const { page, q: search, limit: pageLimit, categories } = searchParams;

  //   const filters = {
  //     page: page ? parseInt(page as string, 10) : undefined,
  //     limit: pageLimit ? parseInt(pageLimit as string, 10) : undefined,
  //     ...(search && { search: search as string }),
  //     ...(categories && { categories: categories as string }),
  //   };

  const orders = [
    {
      id: 1,
      status: "pending",
      photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png",
      name: "Product 1",
      description: "Description 1",
      price: 100,
      created_at: "2024-01-01",
      updated_at: "2024-01-01",
    },
    {
      id: 1,
      status: "pending",
      photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png",
      name: "Product 1",
      description: "Description 1",
      price: 100,
      created_at: "2024-01-01",
      updated_at: "2024-01-01",
    },
    {
      id: 1,
      status: "pending",
      photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png",
      name: "Product 1",
      description: "Description 1",
      price: 100,
      created_at: "2024-01-01",
      updated_at: "2024-01-01",
    },
  ];
  const totalOrders = orders.length;
  return (
    <OrderTable columns={columns} data={orders} totalItems={totalOrders} />
  );
}
