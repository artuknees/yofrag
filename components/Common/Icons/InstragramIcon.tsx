import React from "react";
import Image from "next/image";
import instagramIcon from "../../../public/instagramIcon.svg";

const InstagramIcon = () => {
    return (
        <Image
            src={instagramIcon}
            width={55}
            height={55}
            alt="Not found"
        />
    )
};

export default InstagramIcon;