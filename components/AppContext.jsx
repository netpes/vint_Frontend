import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export default function Context({ children }) {
    const [wishList, setWishList] = useState([]);
    console.log(wishList);
    return (
        <AppContext.Provider
            value={{
                wishList,
                setWishList
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

