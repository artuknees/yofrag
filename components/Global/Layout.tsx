import Head from 'next/head'

const Layout = ({ children }:any) => {
    return (
        <>
            <Head>
                <title>Yofrag</title>
                <meta name="description" content="Agustina Yofre - web portfolio"/>
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <main className='h-screen w-full flex flex-col overflow-y-auto bg-yofrag-gray'>
                {children}
            </main>
        </>
    )
}

export default Layout;