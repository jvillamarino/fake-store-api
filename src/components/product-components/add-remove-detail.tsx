'use client';

import { Product } from "@/models";
import { ShoppingCartContext } from "@/providers/cart-provider";
import { useContext } from "react";
import { Button } from "../ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";

export default function AddRemoveDetailProduct({ product }: { product: Product }) {

    const { getQuantityByProduct, removeProduct, addProduct } = useContext(ShoppingCartContext);

    if (getQuantityByProduct(product.id) === 0) {
        return (
            <Button variant='default' size="lg" className="sm:max-w-fit" onClick={() => addProduct(product)}>
                <ShoppingCart className="mr-4" />
                Add to cart
            </Button>
        )
    }

    return (

        <div className="flex justify-between items-center gap-4 sm:max-w-fit">

            {getQuantityByProduct(product.id) !== 0 &&
                <>

                    <Button variant='default' size="lg" onClick={() => removeProduct(product.id)}>
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span>
                        {getQuantityByProduct(product.id)}
                    </span>
                </>
            }

            <Button variant='default' size="lg" onClick={() => addProduct(product)} >
                <Plus className="h-4 w-4" />
            </Button>

        </div>

    )
}