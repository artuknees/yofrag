import React from "react";

const ProjectTag = ({title , grid=false}: {title:string , grid?: boolean}) => {
    return (
        <div className={`w-[229px] h-[45px] flex flex-col items-center justify-center flex-none ${!grid && 'first:ml-0 last:mr-0 mx-[5px]'} bg-transparent border border-yofrag-white rounded-full`}>
            <span>{title}</span>
        </div>
    )
};

export default ProjectTag;