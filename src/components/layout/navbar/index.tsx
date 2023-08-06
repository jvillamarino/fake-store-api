import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
    return (
        <header className="w-full block">
            <nav className="flex flex-row justify-between items-center py-4 px-8 bg-backgroundElement shadow">
                <h1 className="text-3xl font-bold">
                    <a href="/">
                        Sunner
                    </a>
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
                <ModeToggle />
            </nav >
        </header>
    )
}