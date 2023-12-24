import React from "react";
import TitleAndSubtitle from "./TitleAndSubtitle";
import Photo from "./Photo";
import Links from "./Links";
import Image from "next/image";
import starIcon from "../../../public/starIcon.svg"

const TitleAndPicture = () => {
    return (
        <section className="lg:w-[72%] w-full px-8 lg:px-0 mx-auto relative">
            <div className="w-full flex flex-row mt-10">
                <TitleAndSubtitle/>
                <Photo/>
            </div>
            <div className="w-full mt-5">
                <Links/>
            </div>
            <section className="absolute lg:top-[40%] lg:right-[16%] sm:top-[49.5%] sm:right-[21.5%] top-[24vw] right-[23vw]">
                <Image
                    src={starIcon}
                    alt="star"
                    sizes="100vw"
                    style={{
                        width: '25vw',
                        height: 'auto',
                    }}
                />
            </section>
        </section>
    )
};

export default TitleAndPicture;