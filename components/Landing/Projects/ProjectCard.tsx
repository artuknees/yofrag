import Image from "next/image";
import React from "react";
import projectImage from "../../../public/exampleProject1.png"
import ProjectTag from "@/components/Common/Tags/ProjectTag";
import { isEven } from "@/functions/isEven";
import { useRouter } from "next/router";

interface Project {
    name: string;
    tags: string[];
    bgColor: string;
    textColor: string;
    type: string;
    image?: string;
}

interface ProjectCardProps {
    index: number;
    item: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
    const {
        index,
        item
    } = props;
    const router = useRouter();
    return (
        <section className={`h-fit flex-none w-full lg:border-b lg:border-b-yofrag-black ${isEven(index) && 'lg:border-r lg:border-r-yofrag-black'} p-5`}>
            <section 
                className={`h-fit lg:h-[408px] xl:h-[430px] 2xl:h-[472px] flex flex-col justify-between flex-none rounded-[20px] p-5 hover:shadow-2xl transition-shadow duration-150 cursor-pointer`} 
                style={{color: item?.textColor , backgroundColor: item?.bgColor}}
                onClick={() => router.push(`/projects/${item?.name}`)}
                >
                <section className="w-full 2xl:px-[50px] xl:px-9 lg:px-2 md:px-[50px] px-0 md:pt-[34px] lg:pt-2 xl:pt-8">
                    <div className="w-full relative">
                        <Image
                            src={item?.image??"/exampleProject1.png"}
                            alt="Project"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                </section>
                <div className="flex flex-col flex-none w-full">
                    <p className="text-lg sm:text-2xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-0 md:mb-2.5">{item?.name.toUpperCase()}</p>
                    <div className="flex xl:flex-row lg:flex-col md:flex-row flex-col w-full">
                        {item?.tags?.map((tagItem,index) => <ProjectTag key={index} title={tagItem} color={item?.textColor}/>)}
                    </div>
                </div>
            </section>
        </section>
    )
};

export default ProjectCard;