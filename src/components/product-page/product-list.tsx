import { getProducts } from "@/api/store/store"
import { Product, ProductPageQueryParams } from "@/models";
import ProductCard from "./product-card";


export default async function ProductList({ searchParams }: ProductPageQueryParams) {
    const products: Product[] = await getProducts(searchParams.category);

    return (
        <>
            <article className="block space-y-5">

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {products?.map((product: Product) =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </div>
            </article>
        </>
    )
}