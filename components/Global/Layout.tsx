import Head from 'next/head';
import Navbar from '../Global/Navbar'
import Footer from './Footer';

const Layout = ({ children }:any) => {
    return (
        <>
            <Head>
                <title>Yofrag</title>
                <meta name="description" content="Agustina Yofre - web portfolio"/>
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <main className='w-full flex flex-col justify-between bg-yofrag-gray'>
                <Navbar/>
                    {children}
                <Footer/>
            </main>
        </>
    )
}

export default Layout;