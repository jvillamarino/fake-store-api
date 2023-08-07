
'use client';

import { Product } from "@/models";
import { ShoppingCartContext } from "@/providers/cart-provider";
import Image from "next/image";
import { useContext } from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {

    const { addProduct, getQuantityByProduct, removeProduct }: any = useContext(ShoppingCartContext);


    return (
        <article className="flex flex-col max-h-full w-full h-full bg-backgroundElement p-4 rounded-md shadow-sm space-y-2">
            <div className="flex flex-1 bg-white max-h-48 py-4 rounded">
                <Image src={product.image} width={300} height={300} alt={product.title} className="w-40 h-40 mx-auto object-contain" />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-4">
                <p className="line-clamp-2 text-sm font-semibold">
                    <abbr title={product.title} className="no-underline">
                        {product.title}
                    </abbr>
                </p>
                <p className="line-clamp-4 text-xs">
                    <abbr title={product.description} className="no-underline text-stone-600 dark:text-white dark:text-opacity-70 font-normal tracking-widest">
                        {product.description}
                    </abbr>
                </p>

                <span className="text-xs font-medium capitalize bg-background p-2 w-fit rounded-md">{product.category}</span>



                <div className="flex justify-between items-baseline">
                    <p className="text-base font-bold leading-none">${product.price}</p>
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
                </div>

            </div>
        </article >
    )

}