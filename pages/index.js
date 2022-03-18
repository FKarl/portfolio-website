import Head from 'next/head'
import meta from "../constants/meta";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Section from "../components/sections/Section";
import React from "react";
import About from "../components/sections/about/About";
import Resume from "../components/sections/resume/Resume";
import Skills from "../components/sections/skills/Skills";
import Contact from "../components/sections/contact/Contact";

export default function Home() {
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <link rel="icon" sizes="32x32" href="/favicon.ico"/>
                <meta name="description" content={meta.description}/>
                <meta property="og:type" content={meta.type}/>
            </Head>
            <Navbar/>
            <main>
                <Hero/>
                <About side="l"/>
                <Resume side="r"/>
                <Skills side="l"/>
                <Contact side="r"/>
            </main>
            <Footer/>
        </div>
    )
}
