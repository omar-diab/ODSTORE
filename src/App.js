import "./App.css";
import { Header, Footer } from "./components";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/single-product/SingleProduct";
import SpecialOfferPage from "./pages/special-offer-page/SpeicalOfferPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/special-offer-page/:id" element={<SpecialOfferPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
