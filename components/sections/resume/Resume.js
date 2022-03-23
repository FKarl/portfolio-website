import React from "react";
import Section from "../Section";
import resume from "../../../constants/resume";
import Card from "./Card";

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
                            {resume.map((value, id) => (
                                <Card id={id} title={value.title} location={value.location} date={value.date} key={id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}