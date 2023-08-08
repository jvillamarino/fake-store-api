import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import ShoppingCart from "./shopping-cart/shopping-cart";


export default function Navbar() {
    return (
        <header className="w-full block">
            <nav className="flex flex-row justify-between items-center py-4 px-8 bg-backgroundElement">
                <h1 className="text-3xl font-bold">
                    <Link href="/">
                        Sonner
                    </Link>
                </h1>
                <div className="flex flex-row items-center">
                    <h1 className="text-2xl font-bold">
                        <a href="/">
                            <span className="text-blue-500">
                                <span className="sr-only">
                                    {" "}
                                    &lt;
                                </span>
                                <span className="sr-only"></span>
                            </span>
                        </a>
                    </h1>
                </div>
                <div className="flex gap-2">
                    <ModeToggle />
                    <ShoppingCart />
                </div>
            </nav >
        </header>
    )
}