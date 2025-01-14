// import { fakeProducts, Product } from '@/constants/mock-api';
import { notFound } from 'next/navigation';
import ProductForm from './product-form';
import { fakeProducts, Product } from '@/constants/mock-data';

type TProductViewPageProps = {
  id: string;
};

export default async function ProductViewPage({
  id
}: TProductViewPageProps) {
  let product = null;
  let pageTitle = 'Create New Product';
  // console.log('id', productId);
  if (id !== 'new') {
    const data = await fakeProducts.getProductById(Number(id));
    product = data.product as Product;
    if (!product) {
      notFound();
    }
    pageTitle = `Edit Product`;
  }

  return <ProductForm initialData={product} pageTitle={pageTitle} />;
}
