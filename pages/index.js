import Head from 'next/head'
import meta from "../constants/meta";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import React from "react";
import About from "../components/sections/about/About";
import Resume from "../components/sections/resume/Resume";
import Skills from "../components/sections/skills/Skills";
import { Projects } from '../components/sections/projects/Projects';
import Contact from "../components/sections/contact/Contact";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <link rel="icon" sizes="32x32" href="/favicon.ico"/>
                <meta name="description" content={meta.description}/>
                <meta name="keyword" content={meta.keyword}/>
                <meta charSet="utf-8"/>
                <meta property="og:type" content={meta.type}/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:url" content={meta.url}/>
                <meta property="og:image" content={meta.image}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={meta.title}/>
                <meta name="twitter:description" content={meta.description}/>
                <meta name="twitter:image" content={meta.image}/>
            </Head>
            <Navbar/>
            <ToastContainer/>
            <main className="main-content">
                <Hero/>
                <About side="l"/>
                <Skills side="r"/>
                <Resume side="l"/>
                <Contact side="r"/>
                <Projects/>
            </main>
            <Footer/>
        </>
    )
}
