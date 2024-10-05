import ProductFilterBox from "./ProductFilterBox";
import ProductSortBox from "./ProductSortBox";

const ProductsSidebar = ({ filterItem, setFilterItem, sortItem, setSortItem }) => {
  return (
    <div className="products-sidebar">
      <div className="sidebar-item">
        <h4 className="product-sidebar-title">Filter By Type</h4>
        <ProductFilterBox filterItem={filterItem} setFilterItem={setFilterItem}/>
      </div>
      <div className="sidebar-item">
        <h4 className="product-sidebar-title">Filter By Price</h4>
        <ProductSortBox sortItem={sortItem} setSortItem={setSortItem}/>
      </div>
    </div>
  );
};

export default ProductsSidebar;
