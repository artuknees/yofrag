import React from "react";
import Image from "next/image";
import instagramIconWhite from "../../../public/instagramIconWhite.svg";

const InstagramIconWhite = () => {
    return (
        <Image
            src={instagramIconWhite}
            width={55}
            height={55}
            alt="Not found"
        />
    )
};

export default InstagramIconWhite;