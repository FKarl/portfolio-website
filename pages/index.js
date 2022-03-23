import Head from 'next/head'
import meta from "../constants/meta";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import React from "react";
import About from "../components/sections/about/About";
import Resume from "../components/sections/resume/Resume";
import Skills from "../components/sections/skills/Skills";
import Contact from "../components/sections/contact/Contact";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer/>
            <main>
                <Hero/>
                <About side="l"/>
                <Skills side="r"/>
                <Resume side="l"/>
                <Contact side="r"/>
            </main>
            <Footer/>
        </div>
    )
}
