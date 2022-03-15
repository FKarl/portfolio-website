import React, {useEffect, useState} from "react";
import Link from "next/link";
import userData from "../../constants/userData";
import {BsGithub, BsLinkedin, BsTwitter, BsSun, BsMoonFill} from "react-icons/bs";
import {useTheme} from "next-themes";
import NavLinks from "./NavLinks";

export default function Navbar() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        if (mounted) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    }


    return (
        <header
            className="md:sticky top-0 z-10 bg-gradient-to-b from-bg-500 via-bg-500 to-bg-500/50 dark:from-dark-bg-500 dark:via-dark-bg-500 dark:to-dark-bg-500/50">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex justify-between items-center space-x-3">
                    {/* Name / Home */}
                    <div className="flex flex-col">
                        <Link href="/">
                            <a>
                                <h1 className="font-semibold text-xl whitespace-nowrap">
                                    {userData.name}
                                </h1>
                                <p className="text-base font-light">
                                    {userData.designation}
                                </p>
                            </a>
                        </Link>
                    </div>

                    {/* sections md */}
                    <NavLinks className="hidden md:block space-x-8 whitespace-nowrap"/>

                    {/* Social media and dark mode */}
                    <div className="flex flex-row items-center space-x-4">
                        <a
                            href={userData.social.github}
                            className="text-gray-600 dark:text-gray-200"
                        >
                            <BsGithub/>
                        </a>
                        <a
                            href={userData.social.linkedin}
                            className="text-gray-600 dark:text-gray-200"
                        >
                            <BsLinkedin/>
                        </a>
                        <a
                            href={userData.social.twitter}
                            className="text-gray-600 dark:text-gray-200"
                        >
                            <BsTwitter/>
                        </a>
                        <button
                            aria-label="Toggle Dark Mode"
                            type="button"
                            onClick={toggleTheme}
                            className="w-10 h-10 p-3 dark:bg-transparent"
                        >
                            {mounted &&
                                (
                                    theme === "dark" ? (
                                        <BsSun className="text-yellow-500"/>
                                    ) : (
                                        <BsMoonFill className="text-yellow-500"/>
                                    )
                                )
                            }
                        </button>
                    </div>
                </div>

                {/* sections sm */}
                <NavLinks className="block md:hidden space-x-8 mt-4 whitespace-nowrap"/>
            </div>
        </header>
    )
}