import { Loading } from "./Loading";
import { ProductFilter } from "./ProductFilter";
import { ProductList } from "./ProductList";
import { useProducts } from "./useProducts";

export const ProductListContainer = () => {
  const { products, loading, filterProducts } = useProducts();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ProductFilter onChange={filterProducts} />
          <ProductList products={products} />
        </>
      )}
    </>
  );
};
