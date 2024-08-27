import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json"
import SecondaryButton from "@/components/Common/Buttons/SecondaryButton";
import { useRouter } from "next/router";

const Projects = () => {
    const router = useRouter();
    return (
        <section className="w-[72%] mx-auto mt-9">
            <div className="w-full flex flex-col items-start justify-start border-b border-b-yofrag-black lg:pb-4 pb-2">
                <h1 className="3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold">PROYECTOS</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {[...projects].slice(0,4).map((item,index) => <ProjectCard key={index} index={index} item={item} fullBackground={item.fullBackground}/>)}
            </div>
            <div className="flex flex-row items-center justify-center mt-10 mb-[50px] px-5 lg:px-0">
                <SecondaryButton
                    widths="lg:w-[583px] w-full"
                    text="Ver más proyectos"
                    darkText={true}
                    handleClick={() => router.push("/projects")}
                />
            </div>
        </section>
    )
};

export default Projects