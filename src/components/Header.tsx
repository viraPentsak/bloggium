import Link from "next/link";
import {
    Navbar,
    NavbarBrand,
    NavbarContent, NavbarItem
} from "@nextui-org/react";
import Logo from "@/components/Logo";
import {Alegreya} from "next/font/google";


const alegreya = Alegreya({
    weight: "700",
    subsets: ["latin"]
});

export default function Header() {
    return (
        <Navbar maxWidth={"full"} isBordered >
            <NavbarBrand className={`${alegreya.className} pr-4 py-2`}>
                <Link href="/" className="flex flex-row items-center">
                    <div className="w-10 h-10 mr-2">
                        <Logo/>
                    </div>
                    <span>Bloggium</span>
                    <span className="sr-only">
                        Back to the homepage
                    </span>
                </Link>
            </NavbarBrand>
            <NavbarContent justify="center" className="gap-5">
                <NavbarItem className="text-center">
                    Menu?
                </NavbarItem>
                <NavbarItem className="text-center">
                    Search bar?
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    Auth
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}