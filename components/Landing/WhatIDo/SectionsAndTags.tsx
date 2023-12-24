import NavBarTag from "@/components/Common/Tags/NavBarTag";
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
        <section className="w-full flex flex-col lg:flex-row items-start justify-between mt-[30px] border-b border-b-yofrag-white pb-[30px]">
            <h1 className="2xl:text-4xl lg:text-3xl md:text-2xl text-xl font-normal flex-none">{title}</h1>
            <div
                className="hidden md:grid gap-2.5 justify-items-end md:mt-2.5 lg:mt-0"
                style={{gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`}}>
                {tags.map((item,index) => <NavBarTag key={index} title={item} grid={true}/>)}
            </div>
            <div
                className="w-full flex flex-col justify-items-end md:hidden">
                {tags.map((item,index) => <NavBarTag key={index} title={item} grid={true}/>)}
            </div>
        </section>
    )
};

export default SectionsAndTags;