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
            <main className='h-screen w-full flex flex-col justify-between overflow-y-auto bg-yofrag-gray'>
                <Navbar/>
                {children}
                <Footer/>
            </main>
        </>
    )
}

export default Layout;