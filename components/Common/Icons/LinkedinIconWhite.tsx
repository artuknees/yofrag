import React from "react";
import Image from "next/image";
import linkedinIconWhite from "../../../public/linkedinIconWhite.svg";

const LinkedinIconWhite = () => {
    return (
        <section className="relative 3xl:w-[3vw] 2xl:w-[3.25vw] xl:w-[3.5vw] lg:w-[4vw] md:w-[5.75vw] w-[7vw]">
            <Image
                src={linkedinIconWhite}
                alt="Not found"
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}                
            />
        </section>
    )
};

export default LinkedinIconWhite;