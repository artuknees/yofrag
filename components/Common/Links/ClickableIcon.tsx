import { ThemeProvider, Tooltip, TooltipProps } from "@mui/material";
import Link from "next/link";
import React, { ReactNode } from "react";
import { muiConfig } from "../Styles/muiConfig";

interface ClickableIconProps {
    title: string;
    tooltipPlacement: TooltipProps["placement"];
    href: string;
    linkStyles: string;
    children: ReactNode;
}

const ClickableIcon = (props : ClickableIconProps) => {
    const {
        title,
        tooltipPlacement,
        href,
        linkStyles,
        children
    } = props;
    return (
        <ThemeProvider theme={muiConfig}>
            <Tooltip title={title} placement={tooltipPlacement} arrow>
                <Link href={href} className={linkStyles}>
                    {children}
                </Link>
            </Tooltip>
        </ThemeProvider>
    )
};

export default ClickableIcon;