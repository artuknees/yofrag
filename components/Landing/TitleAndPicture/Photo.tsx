import Image from "next/image";
import React from "react";
import yofre from "../../../public/yofre.png";

const Photo = () => {
    return (
        <section className="w-1/3 flex-none z-10">
            <Image
                src={yofre}
                alt="yofre"
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
        </section>

    )
};

export default Photo;