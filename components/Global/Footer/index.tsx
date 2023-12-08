import React from 'react';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import Link from 'next/link';
import InstagramIcon from '@/components/Common/Icons/InstragramIcon';
import TwitterIcon from '@/components/Common/Icons/TwitterIcon';
import LinkedinIcon from '@/components/Common/Icons/LinkedinIcon';

const Footer = () => {
	return (
        <section className='w-full h-[233px] bg-yofrag-black text-yofrag-white'>
            <div className='w-[72%] h-full mx-auto flex flex-row items-center justify-between'>
            <span className='text-5xl font-light'>Trabajemos juntxs!</span>
            <PrimaryButton
                text='Mandame un e-mail'
                widths='w-[446px]'
                fontSize='18.2'
                green={false}
                darkText={true}
                handleClick={() => console.log('a contacto')}
            />
            <div className='flex flex-row items-center justify-between'>
                <Link href="/" className='mr-[7.5px]'>
                    <InstagramIcon/>
                </Link>
                <Link href="/" className='mx-[7.5px]'>
                    <TwitterIcon/>
                </Link>
                <Link href="/" className='ml-[7.5px]'>
                    <LinkedinIcon/>
                </Link>

            </div>
            </div>
        </section>
	);
}

export default Footer;