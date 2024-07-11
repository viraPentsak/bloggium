import React from "react";
import MainLink from "next/link";
import {
    Navbar,
    NavbarBrand,
    NavbarContent, NavbarItem
} from "@nextui-org/react";
import Logo from "@/components/Logo";
import {Alegreya} from "next/font/google";
import {PATHS} from "@/constants";
import Menu from "@/components/Menu";

const alegreya = Alegreya({
    weight: "700",
    subsets: ["latin"]
});

const menuItems: { name: string, link: string }[] = [
    {
        name: "Browse blogs",
        link: PATHS.blogs()
    },
    {
        name: "Browse authors",
        link: PATHS.authors()
    },

];


export default function Header() {

    return (
        <Navbar maxWidth={"full"} isBordered>
            <NavbarBrand className={`${alegreya.className} pr-4 py-2`}>
                <MainLink href="/" className="flex flex-row items-center">
                    <div className="w-10 h-10 mr-2">
                        <Logo/>
                    </div>
                    <span>Bloggium</span>
                    <span className="sr-only">
                        Back to the homepage
                    </span>
                </MainLink>
            </NavbarBrand>
            <NavbarContent justify="center" className="gap-5 grow">
                    <Menu menuItems={menuItems} WrapperComponent={NavbarItem}/>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    Auth
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}