'use client';

import { CartProdivderInterface, Product } from "@/models";
import { ReactNode, createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext<CartProdivderInterface>({} as CartProdivderInterface);


const LOCALSTORAGE_CART_KEY = 'FakeStoreCart';

const getCartFromLocalStorage = (): Product[] => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem(LOCALSTORAGE_CART_KEY) ?? '[]');
    }

    return [];
}

const setCartToLocalStorage = (cart: Product[]): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(LOCALSTORAGE_CART_KEY, JSON.stringify(cart));
    }

}


export function CartProvider({ children }: { children: ReactNode }) {

    const [cart, setCart] = useState<Product[]>(getCartFromLocalStorage());

    useEffect(() => {
        setCartToLocalStorage(cart);
    }, [cart])

    const getCartProducts: Product[] = cart;

    const getTotal: number = cart.reduce((acc: number, product: Product) => acc + product.price * product.quantity!, 0);

    const getQuantityByProduct = (id: number): number => {
        const product = cart.find((product: Product) => product.id === id);
        return product?.quantity ?? 0;
    }

    const addProduct = ({ id, ...rest }: Product): void => {
        const indexPosition = cart.findIndex((product: Product) => product.id === id);
        if (indexPosition === -1) {
            setCart((cart) => [...cart, { ...rest, id, quantity: 1 }]);
            return;
        }

        const currentQuantity = getQuantityByProduct(id);
        cart[indexPosition] = { ...cart[indexPosition], quantity: currentQuantity + 1 };
        setCart([...cart]);
    }

    const removeProduct = (id: number): void => {
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

    const getCartItemsLength = (): number => {
        return cart.length
    }



    return (
        <ShoppingCartContext.Provider value={{ addProduct, getQuantityByProduct, removeProduct, getCartItemsLength, getCartProducts, getTotal }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}