import { createContext, useState, useEffect } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {

const [cartItems, setCartItems] = useState([
    {
        id: 1234,
        image: "",
        name: "Creek classic cd player",
        stock: 8,
        count: 1,
        price: 1234.50
    },
    {
        id: 3456,
        image: "",
        name: "Creek classic turntable",
        stock: 8,
        count: 1,
        price: 1234.50
    }
]);

const [totalCount, setTotalCount] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);

useEffect(() => {
    setTotalCount(cartItems.reduce((totalCount, item) => totalCount + item.count, 0))
    setTotalPrice(cartItems.reduce((price, item) => price + (item.price * item.count), 0))
}, [cartItems]);

const addToCard = (newItem) => {
    setCartItems([...cartItems, newItem])
}

    return ( 
        <CartContext.Provider value={{cartItems, setCartItems, totalCount, totalPrice, addToCard}}>
            {children}
        </CartContext.Provider>
     );
}
 

