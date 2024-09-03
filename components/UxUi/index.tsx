import React from "react";
import projects from "../Landing/Projects/projects.json"
import ProjectCard from "../Landing/Projects/ProjectCard";


const UxUi = () => {
    return (
        <section className="w-[72%] mx-auto mt-9">
            <div className="w-full flex flex-col items-start justify-start pb-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {[...projects].filter((el) => el.type === 'uxui').map((item,index) =>
                        <ProjectCard
                            key={index}
                            index={index}
                            item={item}
                            fullBackground={item.fullBackground}
                            borders={false}
                        />
                    )}
                </div>
            </div>
        </section>
    )
};

export default UxUi;