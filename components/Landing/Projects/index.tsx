import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json"
import SecondaryButton from "@/components/Common/Buttons/SecondaryButton";

const Projects = () => {
    return (
        <section className="w-[72%] mx-auto mt-9">
            <div className="w-full flex flex-col items-start justify-start border-b border-b-yofrag-black mb-5 pb-[30px]">
                <h1 className="text-6xl font-semibold">PROYECTOS</h1>
            </div>
            <div className="grid grid-cols-2 gap-5 px-5">
                {projects.map((item,index) => <ProjectCard key={index} title={item?.name} bgColor={item?.bgColor} textColor={item?.textColor} tags={item?.tags}/>)}
            </div>
            <div className="flex flex-row items-center justify-center mt-10 mb-[50px]">
                <SecondaryButton
                    widths="w-[583px]"
                    text="Ver más proyectos"
                    darkText={true}
                    handleClick={() => console.log('mas proyectos')}
                />
            </div>
        </section>
    )
};

export default Projects