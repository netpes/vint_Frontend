import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlist";


export default configureStore({
    reducer: {
        wishlist: wishlistReducer
    }
})