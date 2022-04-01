import React from "react";

export default function Card({id, location, title, date}) {
    const left = (id % 2) === 0;
    return (
        <div className="flex flex-col items-center">
            <div className={`flex items-center w-full mx-auto ${left ? "justify-start" : "justify-end"}`}>
                <div className={`w-full md:w-1/2 ${left ? "md:pr-20" : "md:pl-20"}`}>
                    <div
                        className="p-4 bg-secondary-50 dark:bg-dark-secondary-50 rounded text-button-text-500 dark:text-button-text-500">
                        <div className="flex flex-col space-y-1">
                            <span className="font-normal">{location}</span>
                            <span className="font-bold">{title}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute flex items-center justify-center w-fit pl-2 pr-2 h-8 transform -translate-x-1/2 -translate-y-4 bg-highlight-800 dark:bg-dark-highlight-800 rounded-full left-1/2 md:translate-y-0 border border-gray-700 dark:border-gray-200">
                <span className="text-button-text-500 dark:text-dark-button-text-500">{date}</span>
            </div>
        </div>
    )
}