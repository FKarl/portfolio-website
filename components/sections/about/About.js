import React from "react";
import Section from "../Section";
import userData from "../../../constants/userData";

export default function About({side}){

    function calculateYears(date) {
        let difMs = Date.now() - date;
        let dif = new Date(difMs);
        return Math.abs(dif.getUTCFullYear() - 1970);
    }
    const age = calculateYears(userData.birthDate);
    const experience = calculateYears(userData.programmingStart)

    return (
        <Section side={side} id="about" title="About Me">
            {age}
        </Section>
    )
}