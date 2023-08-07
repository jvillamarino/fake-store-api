'use client';

import { Product } from "@/models";
import { CartProdivderInterface } from "@/models/providers/cart-provider.models";
import { ReactNode, createContext, useState } from "react";

export const ShoppingCartContext = createContext<CartProdivderInterface>({} as CartProdivderInterface);

export function CartProvider({ children }: { children: ReactNode }) {

    const [cart, setCart] = useState<Product[]>([]);


    const getQuantityByProduct = (id: number): number => {
        const product = cart.find((product: Product) => product.id === id);
        return product?.quantity ?? 0;
    }

    const addProduct = ({ id, ...rest }: Product) => {
        const indexPosition = cart.findIndex((product: Product) => product.id === id);
        if (indexPosition === -1) {
            setCart((cart) => [...cart, { ...rest, id, quantity: 1 }]);
            return;
        }

        const currentQuantity = getQuantityByProduct(id);
        cart[indexPosition] = { ...cart[indexPosition], quantity: currentQuantity + 1 };
        setCart([...cart]);
    }

    const removeProduct = (id: number) => {
        const indexPosition = cart.findIndex((product: Product) => product.id === id);
        if (indexPosition === -1) {
            return;
        }

        const currentQuantity = getQuantityByProduct(id);
        if (currentQuantity === 1) {
            cart.splice(indexPosition, 1);
            setCart([...cart]);
            return;
        }

        cart[indexPosition] = { ...cart[indexPosition], quantity: currentQuantity - 1 };
        setCart([...cart]);

    }



    return (
        <ShoppingCartContext.Provider value={{ addProduct, getQuantityByProduct, removeProduct }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}