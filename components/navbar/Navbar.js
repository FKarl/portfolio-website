import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitterX , BsSun, BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import NavLinks from "./NavLinks";

import userData from "../../constants/userData";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        if (mounted) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="md:sticky top-0 z-10 bg-bg-500 dark:bg-dark-bg-500">
            <div className="max-w-6xl mx-auto px-4 py-3 lg:py-4 flex justify-between items-center space-x-3">
                <div className="flex flex-col">
                    <Link href="/">

                        <h1 className="font-semibold text-xl whitespace-nowrap">{userData.name}</h1>
                        <p className="text-base font-light">{userData.mainDesignation}</p>

                    </Link>
                </div>

                {/* NavLinks for medium and larger devices */}
                <NavLinks className="hidden md:block space-x-8 whitespace-nowrap text-headline-500 dark:text-dark-headline-500" />

                <div className="flex flex-row items-center space-x-4">
                    <a href={userData.social.github} className="text-headline-500 dark:text-dark-headline-500" aria-label="GitHub-Link">
                        <BsGithub />
                    </a>
                    <a href={userData.social.linkedin} className="text-headline-500 dark:text-dark-headline-500" aria-label="LinkedIn-Link">
                        <BsLinkedin />
                    </a>
                    <a href={userData.social.twitter} className="text-headline-500 dark:text-dark-headline-500" aria-label="TwitterX-Link">
                        <BsTwitterX />
                    </a>
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        onClick={toggleTheme}
                        className="w-10 h-10 p-3 dark:bg-transparent"
                    >
                        {mounted && (theme === "dark" ? <BsSun className="text-yellow-500" /> : <BsMoonFill className="text-yellow-500" />)}
                    </button>
                </div>
            </div>
        </header>
    );
}
