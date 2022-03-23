import React from "react";
import Section from "../Section";

export default function Resume({side}) {
    return (
        <Section side={side} id="resume" title="Resume">
            <div className="flex flex-col justify-center mt-3">
                <div className="w-full mx-auto max-w-md md:max-w-4xl">

                    <div className="relative">
                        {/* line */}
                        <div
                            className="absolute hidden w-px h-full bg-highlight-800 dark:bg-dark-highlight-800 md:block left-1/2"/>
                        {/* ping point */}
                        <div className="hidden md:block rounded-full w-4 h-4 bg-highlight-800 dark:bg-dark-highlight-800 mx-auto mb-14">
                            <div className="rounded-full w-4 h-4 bg-highlight-800 dark:bg-dark-highlight-800 animate-ping"/>
                        </div>
                        <div className="space-y-12 lg:space-y-8">

                            {/* left element */}
                            <div>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-start w-full mx-auto">
                                        <div className="w-full md:w-1/2 md:pr-20">
                                            <div className="p-4 bg-secondary-300 dark:bg-dark-secondary-300 rounded text-button-text-500 dark:text-button-text-500">
                                                <div className="flex flex-col space-y-1">
                                                    <span className="font-light">University of Ulm</span>
                                                    <span className="font-semibold">Bachelor of Science in Computer Science</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute flex items-center justify-center w-fit pl-2 pr-2 h-8 transform -translate-x-1/2 -translate-y-4 bg-highlight-800 dark:bg-dark-highlight-800 rounded-full left-1/2 md:translate-y-0 border border-gray-700 dark:border-gray-200">
                                        <span className="text-button-text-500 dark:text-dark-button-text-500">Ongoing</span>
                                    </div>
                                </div>
                            </div>

                            {/* right element */}
                            <div>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-end w-full mx-auto">
                                        <div className="w-full md:w-1/2 md:pl-20">
                                            <div className="p-4 bg-secondary-300 dark:bg-dark-secondary-300 rounded text-button-text-500 dark:text-button-text-500">
                                                <div className="flex flex-col space-y-1">
                                                    <span className="font-light">University of Ulm</span>
                                                    <span className="font-semibold">Tutor for modules in Practical Computer Science </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute flex items-center justify-center w-fit pl-2 pr-2 h-8 transform -translate-x-1/2 -translate-y-4 bg-highlight-800 dark:bg-dark-highlight-800 rounded-full left-1/2 md:translate-y-0 border border-gray-700 dark:border-gray-200">
                                        <span className="text-button-text-500 dark:text-dark-button-text-500">2021 - 2022</span>
                                    </div>
                                </div>
                            </div>

                            {/* left element */}
                            <div>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-start w-full mx-auto">
                                        <div className="w-full md:w-1/2 md:pr-20">
                                            <div className="p-4 bg-secondary-300 dark:bg-dark-secondary-300 rounded text-button-text-500 dark:text-button-text-500">
                                                <div className="flex flex-col space-y-1">
                                                    <span className="font-light">Technisches-Gymnasium Ehingen</span>
                                                    <span className="font-semibold">General university entrance qualification (1.2) (e.g. German Abitur)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute flex items-center justify-center w-fit pl-2 pr-2 h-8 transform -translate-x-1/2 -translate-y-4 bg-highlight-800 dark:bg-dark-highlight-800 rounded-full left-1/2 md:translate-y-0 border border-gray-700 dark:border-gray-200">
                                        <span className="text-button-text-500 dark:text-dark-button-text-500">2016 - 2019</span>
                                    </div>
                                </div>
                            </div>

                            {/* right element */}
                            <div>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-end w-full mx-auto">
                                        <div className="w-full md:w-1/2 md:pl-20">
                                            <div className="p-4 bg-secondary-300 dark:bg-dark-secondary-300 rounded text-button-text-500 dark:text-button-text-500">
                                                <div className="flex flex-col space-y-1">
                                                    <span className="font-light">Franz-von-Sales Jungenrealschule Ehingen</span>
                                                    <span className="font-semibold">Secondary school diploma (1.6) </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute flex items-center justify-center w-fit pl-2 pr-2 h-8 transform -translate-x-1/2 -translate-y-4 bg-highlight-800 dark:bg-dark-highlight-800 rounded-full left-1/2 md:translate-y-0 border border-gray-700 dark:border-gray-200">
                                        <span className="text-button-text-500 dark:text-dark-button-text-500">2010 - 2016</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}