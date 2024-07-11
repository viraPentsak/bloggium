"use client";
import React, {Fragment} from "react";
import {Link} from "@nextui-org/react";
import {usePathname} from "next/navigation"

interface MenuProps {
    WrapperComponent?: React.ComponentType<{ children: React.ReactNode }>;
    menuItems: { name: string, link: string }[]
}

export default function Menu(
    {
        WrapperComponent,
        menuItems
    }: MenuProps) {

    const pathname = usePathname();
    return menuItems.map(({name, link}) => {
        const renderedLink = <Link className={pathname === link ? "underline" : ""}
                                   href={link}>{name}</Link>;


        return WrapperComponent
            ? <WrapperComponent key={name}>{renderedLink}</WrapperComponent> :
            <Fragment key={name}>renderedLink</Fragment>;
    })
}