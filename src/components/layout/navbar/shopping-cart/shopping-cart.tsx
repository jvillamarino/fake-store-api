'use client'

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCartContext } from "@/providers/cart-provider"
import { ShoppingBag } from "lucide-react"
import { useContext } from "react"
import ProductListItemCard from "./product-list-cart"
import { CartProdivderInterface, Product } from "@/models"


export default function ShoppingCart() {

    const { getCartProducts, getTotal }: CartProdivderInterface = useContext(ShoppingCartContext);

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="outline" size="icon" id="shopping-cart" className="relative">
                    <span className="absolute top-0 right-0 -mt-2 -mr-1 text-xs text-white bg-red-500 rounded-full w-5 h-5  flex justify-center items-center">
                        {getCartProducts.length}
                    </span>
                    <ShoppingBag />
                </Button>
            </SheetTrigger>
            <SheetContent className="overflow-auto flex flex-col justify-between" aria-controls="Tests">
                <div>
                    <SheetHeader>
                        <SheetTitle>Shopping Cart</SheetTitle>
                        <SheetDescription>
                            You can pay with Apple Pay
                        </SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-grow-0 flex-col gap-2 mt-4">
                        {getCartProducts.map((product: Product) => <ProductListItemCard key={product.id} product={product} />)}
                    </div>
                </div>

                <div className="flex w-full justify-between mt-4">
                    <h1 className="text-xl font-bold">Total</h1>
                    <h2 className="text-lg font-bold">${getTotal.toFixed(2)}</h2>
                </div>

            </SheetContent>
        </Sheet>
    )
}