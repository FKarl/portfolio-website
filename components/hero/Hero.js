import React, {useEffect, useRef} from "react";
import Image from "next/image";
import Typical from "react-typical";
import userData from "../../constants/userData";
import Typed from "typed.js"


export default function Hero() {
    const typedName = useRef(null);

    // config typedName
    useEffect(() => {
        const typed = new Typed(typedName.current, {
            strings: [userData.name], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 500,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            cursorChar: ""
        });
        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div
            className=" pb-8 w-full lg:max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center">
            {/* TODO update path? */}
            <div className="relative h-64 w-96">
                <Image src="/../public/avatar.jpg"
                       alt="me"
                       layout="fill"
                       objectFit="cover"
                       className="rounded-3xl"/>
            </div>
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20  xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Hi I am </span>
                        <span ref={typedName} className="text-highlight-500 dark:text-dark-highlight-500"/>
                    </h1>

                    <Typical steps={[3000, "Student", 3000, userData.designation]} loop={Infinity}
                             className="mt-3 text-base md:mt-5 sm:text-lg"/>
                    {/* Buttons */}
                    <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a href="#"
                               className="w-full flex items-center justify-center px-8 md:px:10 py-3 md:py-4 border border-transparent text-base md:text-lg rounded-md text-button-text-500 dark:text-button-text-500 bg-highlight-500 dark:bg-dark-highlight-500 hover:bg-highlight-800 dark:hover:bg-dark-highlight-800">
                                Download my Resume
                            </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a href="#"
                               className="w-full flex items-center justify-center px-8 md:px-10 py-3 md:py-4 border border-transparent text-base md:text-lg rounded-md text-button-text-500 dark:text-button-text-500 bg-secondary-500 dark:bg-dark-secondary-500 hover:bg-secondary-800 dark:bg-dark-secondary-800">
                                Contact me </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}