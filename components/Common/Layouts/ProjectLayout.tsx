import React, { ReactNode } from "react";

interface ProjectLayoutProps {
    name?: string
    children: ReactNode
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ name, children }) => {
    return (
        <section className="w-full">
            {name !== undefined && <section className="w-[72%] mx-auto mt-9">
                <div className="w-full flex flex-col items-start justify-start">
                    <h1 className="text-6xl font-semibold">{name?.toUpperCase()}</h1>
                </div>
            </section>}
            {children}
        </section>
    )
};

export default ProjectLayout;