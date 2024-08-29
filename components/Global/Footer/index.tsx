import React from 'react';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import InstagramIconWhite from '@/components/Common/Icons/InstragramIconWhite';
import TwitterIconWhite from '@/components/Common/Icons/TwitterIconWhite';
import LinkedinIconWhite from '@/components/Common/Icons/LinkedinIconWhite';
import ClickableIcon from '@/components/Common/Links/ClickableIcon';

const Footer = () => {
	return (
        <section className='w-full h-fit py-10 lg:py-0 lg:h-[233px] bg-yofrag-black text-yofrag-white flex-none'>
            <div className='w-full px-8 md:px-0 md:w-[72%] h-full mx-auto flex flex-row items-center justify-between'>
                <span className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-light'>Trabajemos juntxs!</span>
                <PrimaryButton
                    text='Mandame un e-mail'
                    widths='3xl:w-[446px] 2xl:w-[400px] xl:w-[350px] lg:w-[300px] md:w-[250px] w-[200px]'
                    fontSize='3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs'
                    styles='mx-4'
                    green={false}
                    darkText={true}
                    handleClick={() => alert('a contacto')}
                />
                <div className='flex flex-row items-center justify-between'>
                    <ClickableIcon title='Instagram' tooltipPlacement='top' href='https://instagram.com/agustyofr' linkStyles='mr-[7.5px]'>
                        <InstagramIconWhite/>
                    </ClickableIcon>
                    <ClickableIcon title='Twitter' tooltipPlacement='top' href='https://twitter.com/agstnyfr' linkStyles='mx-[7.5px]'>
                        <TwitterIconWhite/>
                    </ClickableIcon>
                    <ClickableIcon title='LinkedIn' tooltipPlacement='top' href='https://www.linkedin.com/in/agustinayofre/' linkStyles='ml-[7.5px]' >
                        <LinkedinIconWhite/>
                    </ClickableIcon>
                </div>
            </div>
        </section>
	);
}

export default Footer;