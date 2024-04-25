import { Suspense } from "react";
import ProdutosPage from "./products";

export default function Products() {
  return (
    <Suspense>
      <ProdutosPage />
    </Suspense>
  );
}
