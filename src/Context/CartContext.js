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

const addToCart = (newItem) => {
    setCartItems([...cartItems, newItem])
}

const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
}

const increaseCount = (id) => {
    setCartItems(cartItems.map(item => {
        if( item.id === id && item.count < item.stock ) {
            item.count = item.count +1
            return item 
        } else {
            return item 
        }
    }))
}

const decreaseCount = (id) => {
    setCartItems(cartItems.map(item => {
        if( item.id === id && item.count < 1 ) {
            item.count = item.count -1
            return item 
        } else {
            return item 
        }
    }))
}


    return ( 
        <CartContext.Provider value={{cartItems, setCartItems, totalCount, totalPrice, addToCart}}>
            {children}
        </CartContext.Provider>
     );
}
 

