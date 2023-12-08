import React from "react";
import Image from "next/image";
import twitterIcon from "../../../public/twitterIcon.svg";

const TwitterIcon = () => {
    return (
        <Image
            src={twitterIcon}
            width={55}
            height={55}
            alt="Not found"
        />
    )
};

export default TwitterIcon;