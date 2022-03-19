import React, {useEffect, useRef} from "react";
import Image from "next/image";
import Typical from "react-typical";
import userData from "../../constants/userData";
import Typed from "typed.js"
import {HiOutlineChevronDoubleDown} from "react-icons/hi"
import Link from "next/link";


export default function Hero() {
    const typedName = useRef(null);

    // config typedName
    useEffect(() => {
        const typed = new Typed(typedName.current, {
            strings: [userData.name], startDelay: 500, typeSpeed: 100, backSpeed: 100, backDelay: 100, cursorChar: ""
        });
        return () => {
            typed.destroy();
        };
    }, [typedName]);


    const designationPrint = () => {
        const delay = 3000;
        const array = [delay, userData.mainDesignation];

        for (const furtherDesignation of userData.furtherDesignations) {
            array.push(3000);
            array.push(furtherDesignation);
        }
        return array;
    }


    return (
        <div>
            <div className="bg-hero-pattern dark:bg-hero-pattern-dark bg-no-repeat bg-cover">
                <div className="flex flex-col lg:[height:86vh]">
                    <div
                        className="pb-8 pt-8 md:pt-0 w-full lg:max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center">
                        {/* TODO fix border "hole"*/}
                        <div
                            className="relative h-80 w-80 border-2 border-highlight-500 dark:border-dark-highlight-500 rounded-3xl">
                            <Image src="/assets/hero/avatar.jpg"
                                   alt="me"
                                   layout="fill"
                                   objectFit="cover"
                                   className="rounded-3xl"/>
                        </div>
                        <div className="mt-10 mx-auto max-w-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20  xl:mt-28">
                            <div className="text-left">
                                <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl sm:text-center lg:text-left">
                                    <span className="block">Hi I am </span>
                                    <span ref={typedName} className="text-highlight-500 dark:text-dark-highlight-500"/>
                                </h1>

                                <Typical steps={designationPrint()} loop={Infinity}
                                         className="mt-1 text-base md:mt-2 sm:text-lg sm:text-center lg:text-left"/>
                                <p className="mt-3 md:mt-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                    in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                {/* Buttons TODO file loader for cv*/}
                                <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link href="resources/cv.pdf">
                                            <a className="w-full flex items-center justify-center px-8 md:px:10 py-3 md:py-4 border border-transparent text-base md:text-lg rounded-md text-button-text-500 dark:text-button-text-500 bg-highlight-500 dark:bg-dark-highlight-500 hover:bg-highlight-800 dark:hover:bg-dark-highlight-800">
                                                Download CV
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a href="#contact"
                                           className="w-full flex items-center justify-center px-8 md:px-10 py-3 md:py-4 border border-transparent text-base md:text-lg rounded-md text-button-text-500 dark:text-button-text-500 bg-secondary-500 dark:bg-dark-secondary-500 hover:bg-secondary-800 dark:bg-dark-secondary-800">
                                            Contact me </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block flex-grow mx-auto">
                        <div className="mt-20">
                            <a href="#about">
                                <HiOutlineChevronDoubleDown
                                    className="text-2xl text-headline-500 dark:text-dark-headline-500 animate-bounce hover:text-highlight-500 dark:hover:text-dark-highlight-500"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-hero-spacer dark:bg-hero-spacer-dark bg-no-repeat bg-cover h-24 sm:h-32 md:h-52 lg:h-80"/>
        </div>
    );
}