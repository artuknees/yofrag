import React from "react";
import TitleAndSubtitle from "./TitleAndSubtitle";
import Photo from "./Photo";
import Links from "./Links";

const TitleAndPicture = () => {
    return (
        <section className="w-[72%] mx-auto">
            <div className="w-full flex flex-row mt-10">
                <TitleAndSubtitle/>
                <Photo/>
            </div>
            <div className="w-full mt-5">
                <Links/>
            </div>
        </section>
    )
};

export default TitleAndPicture;