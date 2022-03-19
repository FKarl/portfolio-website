import Link from "next/link"

export default function PageNotFound() {
    return (
        <div className="w-screen h-screen bg-404-v lg:bg-404 bg-center bg-cover">
            <div className="flex flex-col items-center justify-center top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 space-y-8">
                <h1 className="whitespace-nowrap text-xl tracking-tight font-bold sm:text-4xl md:text-5xl text-dark-headline-500">
                    404 - This page could not be found
                </h1>
                <Link href="/">
                    <a className="shadow w-full sm:w-fit flex items-center justify-center px-8 md:px:10 py-3 md:py-4 border border-transparent text-base rounded-md text-button-text-500 bg-dark-highlight-500 hover:bg-dark-highlight-800">
                        Go back home
                    </a>
                </Link>
            </div>
        </div>
    )
}