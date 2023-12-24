import React from "react";

const NavBarTag = ({title , grid=false}: {title:string , grid?: boolean}) => {
    return (
        <div className={`w-full md:w-[160px] lg:w-[164px] xl:w-[185px] 2xl:w-[229px] h-[45px] flex flex-col items-center justify-center mt-2.5 md:mt-0 ${!grid && 'first:ml-0 last:mr-0 md:mx-[5px] lg:mx-0 xl:mx-[5px]'} bg-transparent border border-yofrag-white rounded-full`}>
            <span className="text-xs 2xl:text-base xl:text-sm lg:text-xs md:text-xs">{title}</span>
        </div>
    )
};

export default NavBarTag;