import Image from "next/image";
import React from "react";
import projectImage from "../../../public/exampleProject1.png"
import ProjectTag from "@/components/Common/Tags/ProjectTag";
import { isEven } from "@/functions/isEven";
import { useRouter } from "next/router";

interface ProjectCardProps {
    title: string;
    tags?: string[];
    textColor: string;
    bgColor: string;
    index: number;
}

const ProjectCard = (props: ProjectCardProps) => {
    const {
        title,
        tags,
        textColor,
        bgColor,
        index
    } = props;
    const router = useRouter();
    return (
        <section className={`h-fit flex-none w-full border-b border-b-yofrag-black ${isEven(index) && 'border-r border-r-yofrag-black'} p-5`}>
            <section 
                className={`h-[472px] flex flex-col flex-none rounded-[20px] p-5 hover:shadow-2xl transition-shadow duration-150 cursor-pointer`} 
                style={{color: textColor , backgroundColor: bgColor}}
                onClick={() => router.push(`/projects/${title}`)}
                >
                <section className="w-full h-full px-[50px] pb-[12px] pt-[34px]">
                    <div className="w-full h-full relative">
                        <Image
                            src={projectImage}
                            fill={true}
                            alt="Project"
                        />
                    </div>
                </section>
                <div className="flex flex-col flex-none w-full">
                    <p className="text-4xl font-bold">{title.toUpperCase()}</p>
                    <div className="flex flex-row w-full mt-2.5">
                        {tags?.map((item,index) => <ProjectTag key={index} title={item}/>)}
                    </div>
                </div>
            </section>
        </section>
    )
};

export default ProjectCard;