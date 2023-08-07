import Categories from "@/components/product-page/categories";
import ProductList from "@/components/product-page/product-list";
import { ProductPageQueryParams } from "@/models";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sonner - Products',
    description: 'Sonner find everything you need',
}

export default async function ProductsPage({ searchParams }: ProductPageQueryParams) {
    return (
        <section className="flex flex-col sm:flex-row flex-auto gap-4 m-4">
            <Categories searchParams={searchParams} />
            <ProductList searchParams={searchParams} />
        </section>
    )
}