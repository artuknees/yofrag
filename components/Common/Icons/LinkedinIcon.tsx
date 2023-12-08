import React from "react";
import Image from "next/image";
import linkedinIcon from "../../../public/linkedinIcon.svg";

const LinkedinIcon = () => {
    return (
        <Image
            src={linkedinIcon}
            width={55}
            height={55}
            alt="Not found"
        />
    )
};

export default LinkedinIcon;