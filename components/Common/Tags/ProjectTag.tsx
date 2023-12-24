import React from "react";

const ProjectTag = ({title , grid=false , color}: {title:string , grid?: boolean , color:string}) => {
    return (
        <div className={`w-full md:w-1/2 lg:w-full xl:w-1/2 xl:max-w-[229px] h-[45px] flex flex-col items-center justify-center xl:mt-0 lg:mt-2.5 lg:first:mt-0 first:mt-2.5 mt-2.5 ${!grid && 'first:ml-0 last:mr-0 md:mx-[5px] lg:mx-0 xl:mx-[5px]'} bg-transparent rounded-full`} style={{border: `solid 1px ${color}`}}>
            <span className="text-xs md:text-sm xl:text-base">{title}</span>
        </div>
    )
};

export default ProjectTag;