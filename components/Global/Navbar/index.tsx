import React from 'react';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import pages from "./pages.json"
import Link from 'next/link';

const Header = () => {
	return (
        <section className='w-full h-[80px] px-12 flex flex-row flex-none items-center justify-between'>
            <span className='text-xl font-semibold'>{`AGUSTINA YOFRE (A — Y)`}</span>
            <div>
                {pages.map((item) => <Link className='mx-2 first:ml-0 last:mr-0 hover:underline text-xl font-light' href={item.path} key={item.name}>{item.name}</Link>)}
            </div>
            <PrimaryButton text='Contacto' widths='w-[197px]' handleClick={() => console.log('a contacto')}/>
        </section>
	);
}

export default Header;