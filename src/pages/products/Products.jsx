import "./products.css";

import { useEffect, useState } from "react";
import ProductList from "./ProductsList";
import ProductsSidebar from "./ProductsSidebar";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";

import { fetchProducts } from "../../redux/apiCalls/productApiCall";

const Products = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  const [filterItem, setFilterItem] = useState("all");
  const [sortItem, setSortItem] = useState("select");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterProduct = products.filter((product) =>
    filterItem === "labtop"
      ? product.isLaptop === true
      : filterItem === "mobile"
      ? product.isLaptop === false
      : product
  );

  const SortProduct =
    sortItem === "low"
      ? filterProduct.sort((a, b) => a.price - b.price)
      : sortItem === "high"
      ? filterProduct.sort((a, b) => b.price - a.price)
      : filterProduct.sort((a, b) => (a.title > b.title ? 1 : -1));

  // Pagination
  const PRODUCT_PER_PAGE = 5;
  const pages = Math.ceil(SortProduct.length / PRODUCT_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const endIndex = currentPage * PRODUCT_PER_PAGE;
  const orderdedProduct = SortProduct.slice(startIndex, endIndex);

  return (
    <>
      <div className="products">
        <ProductsSidebar
          filterItem={filterItem}
          setFilterItem={setFilterItem}
          sortItem={sortItem}
          setSortItem={setSortItem}
        />
        <ProductList products={orderdedProduct} />
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Products;
