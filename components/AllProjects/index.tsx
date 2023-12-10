import React from "react";
import projects from "../Landing/Projects/projects.json"
import ProjectCard from "../Landing/Projects/ProjectCard";

const AllProjects = () => {
    return (
        <section className="w-[72%] mx-auto mt-9">
            <div className="w-full flex flex-col items-start justify-start border-b border-b-yofrag-black pb-[30px]">
                <h1 className="text-6xl font-semibold">PROYECTOS</h1>
            </div>
            <div className="grid grid-cols-2 gap-0 pb-[70px]">
                {[...projects].map((item,index) => <ProjectCard key={index} index={index} title={item?.name} bgColor={item?.bgColor} textColor={item?.textColor} tags={item?.tags}/>)}
            </div>
        </section>
    )
};

export default AllProjects;