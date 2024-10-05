const ProductSortBox = ({ sortItem, setSortItem }) => {
  const onChangeHandler = (e) => {
    setSortItem(e.target.id);
  };

  return (
    <div className="product-sort-box">
      <div className="form-group">
        <input
          value={sortItem}
          onChange={onChangeHandler}
          type="radio"
          name="sort"
          id="no-sort"
        />
        <label htmlFor="no-sort">No Sort</label>
      </div>
      <div className="form-group">
        <input
          value={sortItem}
          onChange={onChangeHandler}
          type="radio"
          name="sort"
          id="low"
        />
        <label htmlFor="low">From Low To High</label>
      </div>
      <div className="form-group">
        <input
          value={sortItem}
          onChange={onChangeHandler}
          type="radio"
          name="sort"
          id="high"
        />
        <label htmlFor="high">From High To Low</label>
      </div>
    </div>
  );
};

export default ProductSortBox;
