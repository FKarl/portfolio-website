import React, {useEffect, useState} from "react";
import Link from "next/link";
import userData from "../constants/userData";
import {BsGithub, BsLinkedin, BsTwitter, BsAlarm, BsSun, BsMoon, BsMoonFill} from "react-icons/bs";
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
        <header className="md:sticky top-0 z-10">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex justify-between items-center space-x-3">
                    {/* Name / Home */}
                    <div className="flex flex-col">
                        <Link href="/">
                            <a>
                                <h1 className="font-semibold text-xl dark:text-gray-100 whitespace-nowrap">
                                    {userData.name}
                                </h1>
                                <p className="text-base font-light text-gray-500 dark:text-gray-300">
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
                            className="w-10 h-10 p-3"
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