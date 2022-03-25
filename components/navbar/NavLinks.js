// noinspection HtmlUnknownAnchorTarget

import React from "react";

export default function NavLinks({className, childClass}) {
    // TODO sections
    return (
        <nav className={className}>
            <a className={childClass} href="#about">About Me</a>
            <a className={childClass} href="#skills">My Skills</a>
            <a className={childClass} href="#resume">Resume</a>
            <a className={childClass} href="#contact">Contact me</a>
        </nav>
    )
}