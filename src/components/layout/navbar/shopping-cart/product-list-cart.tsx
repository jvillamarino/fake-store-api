import AddRemoveProductCart from "@/components/product-components/add-remove";
import { Product } from "@/models";
import Image from "next/image";

export default function ProductListItemCard({ product }: { product: Product }) {


    return (
        <div className="flex items-center justify-between py-1 px-4 shadow-sm rounded-md bg-backgroundElement">
            <div className="flex items-center gap-2">
                <Image src={product.image} alt={product.title} width={80} height={80} className="w-14 h-14 object-contain bg-white rounded-sm" />
                <h2 className="text-xs w-[50%] line-clamp-2">{product.title}</h2>
            </div>
            <div className="flex items-center flex-col">
                <h2 className="text-sm font-bold">${product.price}</h2>
                <AddRemoveProductCart product={product} />
            </div>
        </div>
    )
}