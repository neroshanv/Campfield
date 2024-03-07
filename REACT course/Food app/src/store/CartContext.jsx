import { createContext } from "react";

const CartContext = createContext({
    items: [],
    // object to add or remove items.
    addItem: () => { },
    removeItem: (id) => { }
});

function CartContextProvider() { }