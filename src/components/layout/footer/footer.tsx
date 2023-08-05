export default function Footer() {
    return (
        <footer className="w-full absolute bottom-0 flex flex-row justify-center items-center py-4 px-8 bg-backgroundElement">
            <p className="text-sm text-gray-500">
                &copy; Sunner {new Date().getFullYear()}
            </p>
        </footer>

    )
}