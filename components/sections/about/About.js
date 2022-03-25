import Section from "../Section";
import userData from "../../../constants/userData";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import {useInView} from "react-intersection-observer";

export default function About({side}) {

    const {ref, inView} = useInView();


    function calculateYears(date) {
        let difMs = Date.now() - date;
        let dif = new Date(difMs);
        return Math.abs(dif.getUTCFullYear() - 1970);
    }

    const age = calculateYears(userData.birthDate);
    const experience = calculateYears(userData.programmingStart)

    return (
        <div>
            <Section side={side} id="about" title="About Me">
                <p className="text-lg md:text-xl lg:text-2xl font-serif md:tracking-wide lg:tracking-wider" ref={ref}>
                    <RoughNotationGroup  show={inView} animationDelay={2000}>
                        Hi, my name is&nbsp;
                        <RoughNotation type="underline" padding={[0,1]} multiline={true} className="text-highlight-500 dark:text-dark-highlight-500">{userData.name }</RoughNotation>
                        &nbsp;and I am {age} years old. I am a&nbsp;
                        <RoughNotation type="box" padding={[2,2]} multiline={true} className="text-highlight-500 dark:text-dark-highlight-500">Computer Science</RoughNotation>
                        &nbsp;student at the University of Ulm, and I am particularly interested in data science.
                        My programming experience began around {experience} years ago, during my senior years of high school (e.g. German Abitur).
                        Since then, my focus has shifted away from traditional programming and software engineering and toward&nbsp;
                        <RoughNotation type="circle" multiline={true} className="text-highlight-500 dark:text-dark-highlight-500">data science</RoughNotation>
                        &nbsp;and machine learning.
                        I find it very exciting that you don&apos;t look at a program as a simple process, but as a problem for which you develop models to solve.
                        This is also why I&apos;ve chosen to pursue a career in this field.

                        Over the years, I&apos;ve developed a variety of skills, which are detailed in the following section.
                    </RoughNotationGroup>
                </p>
            </Section>
        </div>
    )
}