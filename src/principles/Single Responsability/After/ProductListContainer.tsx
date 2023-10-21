import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
import Loading from "./Loading";
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
