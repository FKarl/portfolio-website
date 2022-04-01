import {useEffect, useState} from "react";

export default function ProgressBar({progress, start, icon, title}) {

    const [value, setValue] = useState(0);

    useEffect(() => {
        if (start && value === 0) {
            setValue(progress)
        }
    }, [start])

    return (
        <div className="space-y-3">
            <div className="flex flex-row justify-between items-end">
                <div className="flex flex-row items-end space-x-3">
                    <div className="-mb-1 w-8">
                        {icon}
                    </div>
                    <h2 className="font-semibold">
                        {title}
                    </h2>
                </div>
                <div>
                    {progress} / 10
                </div>
            </div>
            <div className="h-3 w-full bg-headline-500 dark:bg-dark-headline-500 rounded text-center">
                <div
                    style={{width: `${value * 10}%`}}
                    className="rounded h-full bg-highlight-500 dark:bg-dark-highlight-500 transition-all ease-out duration-1000 delay-500"/>
                <div className="h-full w-1 bg-bg-500 dark:bg-dark-bg-500 [margin-left:9.5%] -mt-3"/>
                <div className="h-full w-1 bg-bg-500 dark:bg-dark-bg-500 [margin-left:19.5%] -mt-3"/>
                <div className="h-full w-1 bg-bg-500 dark:bg-dark-bg-500 [margin-left:29.5%] -mt-3"/>
                <div className="h-full w-1 bg-bg-500 dark:bg-dark-bg-500 [margin-left:39.5%] -mt-3"/>
                <div className="h-full w-1 bg-bg-500 dark:bg-dark-bg-500 [margin-left:49.5%] -mt-3"/>
                <div className="h-full w-1 bg-bg-500 dark:bg-dark-bg-500 [margin-left:59.5%] -mt-3"/>
                <div className="h-full w-1 bg-bg-500 dark:bg-dark-bg-500 [margin-left:69.5%] -mt-3"/>
                <div className="h-full w-1 bg-bg-500 dark:bg-dark-bg-500 [margin-left:79.5%] -mt-3"/>
                <div className="h-full w-1 bg-bg-500 dark:bg-dark-bg-500 [margin-left:89.5%] -mt-3"/>
            </div>
        </div>
    );
};
