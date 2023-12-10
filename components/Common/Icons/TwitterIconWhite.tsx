import React from "react";
import Image from "next/image";
import twitterIconWhite from "../../../public/twitterIconWhite.svg";

const TwitterIconWhite = () => {
    return (
        <Image
            src={twitterIconWhite}
            width={55}
            height={55}
            alt="Not found"
        />
    )
};

export default TwitterIconWhite;