import Image from "next/image";
import React from "react";
import projectImage from "../../../public/exampleProject1.png"
import ProjectTag from "@/components/Common/Tags/ProjectTag";

interface ProjectCardProps {
    title: string;
    tags?: string[];
    textColor: string;
    bgColor: string;
}

const ProjectCard = (props: ProjectCardProps) => {
    const {
        title,
        tags,
        textColor,
        bgColor
    } = props;
    console.log(props)
    return (
        <section className={`h-[472px] flex flex-col flex-none border rounded-[20px] p-5`} style={{color: textColor , backgroundColor: bgColor}}>
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
                <p className="text-4xl font-bold">{title}</p>
                <div className="flex flex-row w-full mt-2.5">
                    {tags?.map((item,index) => <ProjectTag key={index} title={item}/>)}
                </div>
            </div>
        </section>
    )
};

export default ProjectCard;