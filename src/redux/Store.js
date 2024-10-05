import { configureStore } from "@reduxjs/toolkit";

import { productReducer } from "./slices/productSlice";
import { cartReducer } from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer
    },
})

export default store;