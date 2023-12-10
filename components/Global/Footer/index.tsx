import React from 'react';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import InstagramIconWhite from '@/components/Common/Icons/InstragramIconWhite';
import TwitterIconWhite from '@/components/Common/Icons/TwitterIconWhite';
import LinkedinIconWhite from '@/components/Common/Icons/LinkedinIconWhite';
import ClickableIcon from '@/components/Common/Links/ClickableIcon';

const Footer = () => {
	return (
        <section className='w-full h-[233px] bg-yofrag-black text-yofrag-white flex-none'>
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
                    <ClickableIcon title='Instagram' tooltipPlacement='top' href='/' linkStyles='mr-[7.5px]'>
                        <InstagramIconWhite/>
                    </ClickableIcon>
                    <ClickableIcon title='Twitter' tooltipPlacement='top' href='/' linkStyles='mx-[7.5px]'>
                        <TwitterIconWhite/>
                    </ClickableIcon>
                    <ClickableIcon title='LinkedIn' tooltipPlacement='top' href='/' linkStyles='ml-[7.5px]' >
                        <LinkedinIconWhite/>
                    </ClickableIcon>
                </div>
            </div>
        </section>
	);
}

export default Footer;