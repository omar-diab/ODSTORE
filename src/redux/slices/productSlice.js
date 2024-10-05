import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        product: null,
        loading: false,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setProduct: (state, action) => {
            state.product = action.payload;
        },
        setLoading: (state) => {
            state.loading = true;
        },
        clearLoading: (state) => {
            state.loading = false;
        }
    },
});

const productActions = productSlice.actions;
const productReducer = productSlice.reducer;


export { productActions, productReducer };