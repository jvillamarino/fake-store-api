import { Product } from "@/models";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {

    return (
        <article className="block w-full h-full bg-backgroundElement p-4 rounded-md shadow-sm space-y-2">
            <Image src={product.image} width={300} height={300} alt={product.title} className="w-40 h-40 mx-auto object-contain" />
            <p className="line-clamp-2">
                <abbr title={product.title} className="no-underline">

                    {product.title}
                </abbr>
            </p>
            <p>{product.price}</p>
        </article>
    )

}