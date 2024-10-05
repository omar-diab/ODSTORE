import ProductItem from "./ProductItem";


const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductItem product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default ProductsList;
