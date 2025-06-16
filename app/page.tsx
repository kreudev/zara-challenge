import { LoadingBar } from "@/components";
import { ProductBase } from "@/domain/interfaces";
import { ProductListPage } from "@/screens/product_list/ProductListPage";
import { getProducts } from "@/services/use-cases/getProducts";
import { Suspense } from "react";

export default async function Home() {
  const products = await getProducts({ options: { search: '', limit: 21, offset: 0 } }) || [];
  const plainProducts = products.map((p: ProductBase) => ({
    ...p,
    basePrice: {
      amount: p.basePrice.getValue(),
      currency: p.basePrice.getCurrency(),
    },
  }));
  return (
    <Suspense fallback={<LoadingBar loading={true} />}>
      <ProductListPage initialProducts={plainProducts} />
    </Suspense>
  );
}
