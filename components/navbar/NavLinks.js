import React from "react";

export default function NavLinks({className, childClass}) {
    // TODO sections
    return (
        <nav className={className}>
            <a className={childClass} href="#skills">My Skills</a>
            <a className={childClass}>Placeholder 2</a>
            <a className={childClass}>Placeholder 3</a>
            <a className={childClass}>Placeholder 4</a>
        </nav>
    )
}