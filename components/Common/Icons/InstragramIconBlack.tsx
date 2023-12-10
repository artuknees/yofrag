import React from "react";
import Image from "next/image";
import instagramIconBlack from "../../../public/instagramIconBlack.svg";

const InstagramIconBlack = () => {
    return (
        <Image
            src={instagramIconBlack}
            width={55}
            height={55}
            alt="Not found"
        />
    )
};

export default InstagramIconBlack;