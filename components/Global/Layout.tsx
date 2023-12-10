import Head from 'next/head';
import Navbar from '../Global/Navbar'
import Footer from './Footer';
import React , { ReactNode } from 'react';

const Layout = ({ children }: {children: ReactNode}) => {
    return (
        <>
            <Head>
                <title>Agustina Yofre</title>
                <meta name="description" content="Agustina Yofre - web portfolio"/>
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <main className='min-h-screen h-full w-full flex flex-col bg-yofrag-gray'>
                <Navbar/>
                <div className='flex flex-col flex-auto h-full'>
                    {children}
                </div>
                <Footer/>
            </main>
        </>
    )
}

export default Layout;