'use client';

import { Product } from "@/models";
import { ShoppingCartContext } from "@/providers/cart-provider";
import { useContext } from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

export default function AddRemoveProductCart({ product }: { product: Product }) {

    const { getQuantityByProduct, removeProduct, addProduct } = useContext(ShoppingCartContext);

    return (

        <div className="flex justify-between items-center gap-1">

            {getQuantityByProduct(product.id) !== 0 &&
                <>

                    <Button variant='outline' size="rounded-icon" onClick={() => removeProduct(product.id)}>
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span>
                        {getQuantityByProduct(product.id)}
                    </span>
                </>
            }

            <Button variant='outline' size='rounded-icon' onClick={() => addProduct(product)} >
                <Plus className="h-4 w-4" />
            </Button>

        </div>

    )
}