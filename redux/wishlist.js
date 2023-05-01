import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [{ "moreImages": ["https://cdn.shopify.com/s/files/1/0588/4900/1651/products/Group196_1445x.png?v=1660588236", "https://cdn.shopify.com/s/files/1/0588/4900/1651/products/Group196_1445x.png?v=1660588236", "https://dummyimage.com/300x300/000/fff&text=Yellow+Midi+Dress"], "price": "$59.99", "productImage": "https://cdna.lystit.com/photos/urbanoutfitters/b8415ce9/urban-outfitters-designer-Washed-Black-Ice-Cube-Good-Day-Vintage-Tee.jpeg", "productName": "Black Leather Jacket", "seller": "Fashion Point", "size": "XXL" }],
}

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer

