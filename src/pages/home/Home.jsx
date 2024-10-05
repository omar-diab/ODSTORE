import { useEffect } from "react";
import {
  Banner,
  Category,
  Offers,
  Slider,
  HeadingTitle,
  Brands,
} from "../../components";


import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../redux/apiCalls/productApiCall";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product)


  useEffect(() => {
    dispatch(fetchProducts())
  }, [])


  const labtops = products.filter((p) => p.isLaptop === true);
  const mobiles = products.filter((p) => p.isLaptop === false);

  return (
    <>
      <Banner />
      <Category />
      <Offers />
      <HeadingTitle title="News Labtops" />
      <Slider data={labtops} />
      <HeadingTitle title="News Phones" />
      <Slider data={mobiles} />
      <HeadingTitle title="Popular Brands" />
      <Brands />
    </>
  );
};

export default Home;
