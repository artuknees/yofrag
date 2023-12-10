import React from "react";
import Image from "next/image";
import linkedinIconWhite from "../../../public/linkedinIconWhite.svg";

const LinkedinIconWhite = () => {
    return (
        <Image
            src={linkedinIconWhite}
            width={55}
            height={55}
            alt="Not found"
        />
    )
};

export default LinkedinIconWhite;