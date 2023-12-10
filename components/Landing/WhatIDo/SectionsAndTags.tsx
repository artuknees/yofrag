import ProjectTag from "@/components/Common/Tags/ProjectTag";
import React from "react";

interface SectionsAndTagsProps {
    title: string;
    tags: string[];
    columns: number
}

const SectionsAndTags = (props:SectionsAndTagsProps) => {
    const {
        title,
        tags,
        columns
    } = props;
    return (
        <section className="w-full flex flex-row items-start justify-between mt-[30px] border-b border-b-yofrag-white pb-[30px]">
            <h1 className="text-4xl font-normal flex-none">{title}</h1>
            <div className="grid gap-2.5 justify-items-end" style={{gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`}}>
                {tags.map((item,index) => <ProjectTag key={index} title={item} grid={true}/>)}
            </div>
        </section>
    )
};

export default SectionsAndTags;