import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

function ProductCardContainer() {
  const { data, isLoading, error } = useProducts();
  if (error) return <div>{error}</div>;
  return (
    <div className="grid grid-cols-4 gap-4">
      {isLoading ? (
        <>
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </>
      ) : (
        data.map((item) => (
          <ProductCard
            key={item.id}
            {...item}
          />
        ))
      )}
    </div>
  );
}

export default ProductCardContainer;
