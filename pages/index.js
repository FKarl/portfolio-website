import Head from 'next/head'
import meta from "../constants/meta";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";

export default function Home() {
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <meta property="og:type" content={meta.type}/>
            </Head>
            <Navbar/>
            <main>
                <Hero/>
            </main>
            <Footer/>
        </div>
    )
}
