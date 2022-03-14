import Head from 'next/head'
import meta from "../constants/meta";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
                <div className="h-96">
                    test
                </div>
                <div className="h-96">
                    test dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                </div>
                <div className="h-96">
                    test
                </div>
            </main>
            <Footer/>
        </div>
    )
}
