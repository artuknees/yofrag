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
        <section className={`h-fit flex-none w-full lg:border-b lg:border-b-yofrag-black ${isEven(index) && 'lg:border-r lg:border-r-yofrag-black'} p-5`}>
            <section 
                className={`h-fit lg:h-[408px] xl:h-[430px] 2xl:h-[472px] flex flex-col justify-between flex-none rounded-[20px] p-5 hover:shadow-2xl transition-shadow duration-150 cursor-pointer`} 
                style={{color: textColor , backgroundColor: bgColor}}
                onClick={() => router.push(`/projects/${title}`)}
                >
                <section className="w-full 2xl:px-[50px] xl:px-9 lg:px-2 md:px-[50px] px-0 md:pt-[34px] lg:pt-2 xl:pt-8">
                    <div className="w-full relative">
                        <Image
                            src={projectImage}
                            alt="Project"
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                </section>
                <div className="flex flex-col flex-none w-full">
                    <p className="text-lg sm:text-2xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-0 md:mb-2.5">{title.toUpperCase()}</p>
                    <div className="flex xl:flex-row lg:flex-col md:flex-row flex-col w-full">
                        {tags?.map((item,index) => <ProjectTag key={index} title={item}/>)}
                    </div>
                </div>
            </section>
        </section>
    )
};

export default ProjectCard;