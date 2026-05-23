import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartPovide({children}){
    const [cart, setCart] = useState([]);
    
    const addToCart = (phone) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === phone.id);


            if(exists){
                return prev.map((item) => 
                item.id === phone.id ? {...item, quality: item.quality + 1} : item
                );
            }
            return [...prev, { ...phone, quality: 1}];

        });
    };

    const removeFromCart = (phoneId) => {
        setCart((prev) => prev.filter((item) => item,id !== phoneId));
        

    };

}