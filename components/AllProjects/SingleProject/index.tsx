import React from "react";
import { useRouter } from "next/router";

const SingleProject = () => {
    const router = useRouter();
    return (
        <section className="w-[72%] mx-auto mt-9">
            <div className="w-full flex flex-col items-start justify-start pb-[30px]">
                <h1 className="text-6xl font-semibold">{typeof router?.query?.id === 'string' && router?.query?.id.toUpperCase()}</h1>
            </div>
        </section>
    )
};

export default SingleProject;