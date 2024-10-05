const ProductFilterBox = ({ filterItem, setFilterItem }) => {
  const onChangeHandler = (e) => {
    setFilterItem(e.target.id);
  };

  return (
    <div className="product-filter">
      <div className="form-group">
        <input
          value={filterItem}
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="all"
        />
        <label htmlFor="all">All Products</label>
      </div>
      <div className="form-group">
        <input
          value={filterItem}
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="labtop"
        />
        <label htmlFor="labtop">Only Labtops</label>
      </div>
      <div className="form-group">
        <input
          value={filterItem}
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="mobile"
        />
        <label htmlFor="mobile">Only Phones</label>
      </div>
    </div>
  );
};

export default ProductFilterBox;
