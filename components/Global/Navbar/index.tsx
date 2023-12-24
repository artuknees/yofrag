import React from 'react';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import pages from "./pages.json"
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    console.log(router.pathname)
	return (
        <section className='w-full h-fit py-4 md:h-[80px] md:py-0 px-4 md:px-12 flex flex-row flex-none items-center justify-between'>
            <Link href="/" className='text-base lg:text-xl font-semibold'>{`AGUSTINA YOFRE (A — Y)`}</Link>
            <div className='hidden md:inline text-sm lg:text-base xl:text-lg 3xl:text-xl'>
                {pages.map((item) => 
                    <Link
                        className={`mx-2 first:ml-0 last:mr-0 ${router.pathname.includes(item.path) && 'font-semibold underline'} hover:underline font-light`}
                        href={item.path}
                        key={item.name}
                    >
                        {item.name}
                    </Link>
                )}
            </div>
            <PrimaryButton text='Contacto' widths='w-28 lg:w-[197px]' handleClick={() => console.log('a contacto')}/>
        </section>
	);
}

export default Header;