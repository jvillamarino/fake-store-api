import { getProductById } from "@/api/store/store"
import AddRemoveDetailProduct from "@/components/product-components/add-remove-detail";
import { Product } from "@/models";
import { ArrowLeft } from "lucide-react";
import { ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params: { id } }: Props, parent: ResolvingMetadata) {
    const product = await getProductById(id);
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: `Sonner - ${product.title}`,
        description: product.description,
        openGraph: {
            images: [product.image, ...previousImages]
        }

    }

}


export default async function ProductDetail({ params: { id } }: Props) {

    const product: Product = await getProductById(id);

    return (
        <>
            <div className="flex flex-col gap-4 p-5 md:p-32 lg:p-40 justify-self-center">

                <Link href='/products' passHref className='text-base font-medium text-primary flex gap-2 md:'>
                    <ArrowLeft />
                    Back to products
                </Link>
                <div className="flex flex-col md:flex-row flex-auto items-center md:items-stretch justify-center gap-4">

                    <Image src={product.image} alt={product.title} width={400} height={400} className="bg-white max-w-[270px] rounded-2xl object-contain p-8" />
                    <div className="flex flex-auto justify-between flex-col h-full md:py-4 md:pl-8 max-w-xl gap-4 md:gap-0">
                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-medium capitalize bg-backgroundElement p-2 w-fit rounded-md">{product.category}</span>
                            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                                {product.title}
                            </h1>

                            <p className="text-xs lg:text-base">
                                {product.description}
                            </p>

                        </div>

                        <p className="text-2xl font-bold">
                            ${product.price}
                        </p>
                        <AddRemoveDetailProduct product={product}></AddRemoveDetailProduct>
                    </div>
                </div >
            </div>
        </>
    )
}