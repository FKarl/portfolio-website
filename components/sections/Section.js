import {CgArrowLongRightC, CgArrowLongDownC} from "react-icons/cg"
import React from "react";

export default function Section({children, side, title, id, className}) {
    if (!((side === "l") || (side === "r"))) side = "l";


    return (
        <section className={className}>
            <div id={id} className="md:-mt-32 md:pt-32 lg:-mt-48 lg:pt-48 overflow-hidden">
                <div
                    className={`pl-4 pr-4 md:pl-0 md:pr-0 mt-3 md:mt-5 pb-8 w-full lg:max-w-7xl mx-auto flex flex-col items-start space-y-6 md:space-y-0 md:space-x-6 ${side === "l" ? "md:flex-row md:[padding-right:4.25rem]" : "md:flex-row-reverse space-x-reverse md:[padding-left:4.25rem]"}`}
                >

                    {/*marker*/}
                    <div className="mx-auto flex flex-row items-end space-x-3 sm:space-x-5  md:space-y-5 md:flex-col">
                        <CgArrowLongRightC
                            className=" md:hidden text-3xl sm:text-4xl text-headline-500 dark:text-dark-headline-500"/>
                        <CgArrowLongDownC
                            className="hidden md:block text-5xl text-headline-500 dark:text-dark-headline-500"/>
                        <h1 className="whitespace-nowrap text-2xl tracking-tight font-bold sm:text-3xl md:text-4xl md:[writing-mode:vertical-lr]">
                            {title}
                        </h1>
                    </div>

                    {/*content*/}
                    <div className="flex-grow w-full">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}
