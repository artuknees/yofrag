import ClickableIcon from "@/components/Common/Links/ClickableIcon";
import React from "react";
import InstagramIconBlack from "@/components/Common/Icons/InstragramIconBlack";
import TwitterIconBlack from "@/components/Common/Icons/TwitterIconBlack";
import LinkedinIconBlack from "@/components/Common/Icons/LinkedinIconBlack";

const Links = () => {
    return (
        <section className="w-full flex flex-row items-center justify-end">
            <ClickableIcon title='Instagram' tooltipPlacement='top' href='/' linkStyles='mr-[7.5px]'>
                <InstagramIconBlack/>
            </ClickableIcon>
            <ClickableIcon title='Twitter' tooltipPlacement='top' href='/' linkStyles='mx-[7.5px]'>
                <TwitterIconBlack/>
            </ClickableIcon>
            <ClickableIcon title='LinkedIn' tooltipPlacement='top' href='/' linkStyles='ml-[7.5px]' >
                <LinkedinIconBlack/>
            </ClickableIcon>
        </section>
    )
};

export default Links;