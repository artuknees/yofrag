import React from "react";
import Image from "next/image";
import twitterIconBlack from "../../../public/twitterIconBlack.svg";

const TwitterIconBlack = () => {
    return (
        <Image
            src={twitterIconBlack}
            width={55}
            height={55}
            alt="Not found"
        />
    )
};

export default TwitterIconBlack;