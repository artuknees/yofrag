import React from "react";
import Image from "next/image";
import linkedinIconBlack from "../../../public/linkedinIconBlack.svg";

const LinkedinIconBlack = () => {
    return (
        <Image
            src={linkedinIconBlack}
            width={55}
            height={55}
            alt="Not found"
        />
    )
};

export default LinkedinIconBlack;