import Image from "next/image";
import React from "react";
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
    uri: string
}

interface ProjectCardProps {
    index: number;
    item: Project;
    fullBackground?: boolean
    borders?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    index,
    item,
    fullBackground = false,
    borders = true
}) => {
    const router = useRouter();
    return (
        <section
            className={`h-fit flex-none w-full ${borders ? 'lg:border-b lg:border-b-yofrag-black' : ''} ${isEven(index) && borders && 'lg:border-r lg:border-r-yofrag-black'} p-5 overflow-hidden`}
        >
            <section 
                className={`h-fit lg:h-[408px] xl:h-[430px] 2xl:h-[472px] flex flex-col justify-between flex-none rounded-[20px] p-5 hover:shadow-2xl transition-shadow duration-150 cursor-pointer overflow-hidden`} 
                style={{
                    color: item?.textColor,
                    backgroundColor: fullBackground ? 'none' : item?.bgColor,
                    backgroundImage: fullBackground ? 'url("/projects/tallerDeBordado.png")': 'none'
                }}
                onClick={() => router.push(`/projects/${item?.uri}`)}
                >
                <section className="w-full flex flex-auto 2xl:px-[50px] xl:px-9 lg:px-2 md:px-[50px] px-0 md:pt-[34px] lg:pt-0 xl:pt-0 pb-4 justify-center">
                    {!fullBackground
                        ? <Image
                            src={item?.image??"/exampleProject1.png"}
                            alt="Project"
                            width={0}
                            height={0}
                            sizes="100vh"
                            style={{
                                width: 'auto',
                                height: '100%',
                                objectFit: 'scale-down',
                            }}
                        />
                        : <></>
                    }
                </section>
                <div className="flex flex-col flex-none w-full">
                    <p className="text-lg sm:text-2xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-0 md:mb-2.5">{item?.name}</p>
                    <div className="flex xl:flex-row lg:flex-col md:flex-row flex-col w-full">
                        {item?.tags?.map((tagItem,index) => <ProjectTag key={index} title={tagItem} color={item?.textColor}/>)}
                    </div>
                </div>
            </section>
        </section>
    )
};

export default ProjectCard;