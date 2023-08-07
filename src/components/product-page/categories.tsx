import { getCategories } from "@/api/store/store"
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Category, ProductPageQueryParams } from "@/models";

export default async function Categories({ searchParams: { category: categoryParam } }: ProductPageQueryParams) {
    const categories: Category[] = await getCategories();

    return (
        <>
            <article className="block w-full sm:w-80 flex-shrink-0 h-fit bg-backgroundElement rounded-md">
                <h1 className="text-xl font-semibold m-8">Categories</h1>
                <div className="flex flex-col gap-2 m-8">
                    {categories?.map((category: Category) => <div key={category.id}>
                        <Link href={category.link}>
                            <Checkbox id={category.id} checked={categoryParam === category.text || categoryParam === undefined} />
                            <label
                                htmlFor={category.id}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize cursor-pointer ml-4"
                            >
                                {category.text}
                            </label>
                        </Link>
                    </div>)}
                </div>

            </article>
        </>
    )
}