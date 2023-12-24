import React from "react";
import TitleAndPicture from "./TitleAndPicture";
import Projects from "./Projects";
import WhatIDo from "./WhatIDo";

const Landing = () => {
    return (
        <section className="w-full flex flex-col h-full">
            <TitleAndPicture/>
            <Projects/>
            <WhatIDo/>
        </section>
    )
};

export default Landing;