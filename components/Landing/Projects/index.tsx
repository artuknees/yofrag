import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json"
import SecondaryButton from "@/components/Common/Buttons/SecondaryButton";
import { useRouter } from "next/router";

const Projects = () => {
    const router = useRouter();
    return (
        <section className="w-[72%] mx-auto mt-9">
            <div className="w-full flex flex-col items-start justify-start border-b border-b-yofrag-black pb-[30px]">
                <h1 className="text-6xl font-semibold">PROYECTOS</h1>
            </div>
            <div className="grid grid-cols-2 gap-0">
                {[...projects].slice(0,4).map((item,index) => <ProjectCard key={index} index={index} title={item?.name} bgColor={item?.bgColor} textColor={item?.textColor} tags={item?.tags}/>)}
            </div>
            <div className="flex flex-row items-center justify-center mt-10 mb-[50px]">
                <SecondaryButton
                    widths="w-[583px]"
                    text="Ver más proyectos"
                    darkText={true}
                    handleClick={() => router.push("/projects")}
                />
            </div>
        </section>
    )
};

export default Projects