import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";

function ProductCardContainer() {
  const { data, error, isLoading } = useProducts();
  if (error) return <div>{error}</div>;
  if (isLoading) return <p>محصولات در حال بارگذاری میباشند . . .</p>;
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          img={item.img_url}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default ProductCardContainer;
